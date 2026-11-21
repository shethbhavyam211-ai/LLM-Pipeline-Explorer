// ==========================================================================
// LLM Pipeline Explorer - script.js
// Stage 10: Final clean-up, complete interactive pipeline & theme management.
// ==========================================================================

// ==========================================================================
// SECTION 0: THEME MANAGEMENT (getStartingTheme, applyTheme, toggleTheme)
// ==========================================================================

/**
 * WHAT: Determines the starting theme on page load.
 * WHY:  First checks if the user previously saved a theme preference in localStorage.
 *       If no preference was saved, falls back to the system preference via matchMedia.
 *       Defaults to 'dark' as specified.
 *
 * @returns {'dark' | 'light'}
 */
function getStartingTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch (e) {
    // localStorage might be unavailable in restricted environments
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
}

/**
 * WHAT: Applies the given theme to the document and updates storage.
 * WHY:  Sets the data-theme attribute on <html>, persists choice to localStorage,
 *       updates the toggle icon, and redraws the 3D canvas with the new theme colors.
 *
 * @param {'dark' | 'light'} theme - Target theme to apply
 */
function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  try {
    localStorage.setItem('theme', theme);
  } catch (e) {}

  // Update SVG icon visibility
  const sunIcon = document.querySelector('.icon-sun');
  const moonIcon = document.querySelector('.icon-moon');
  if (sunIcon && moonIcon) {
    if (theme === 'light') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  // Redraw 3D canvas with new CSS theme colors
  render3DCanvas();
}

/**
 * WHAT: Toggles between 'light' and 'dark' themes.
 * WHY:  Called when the user clicks the sun/moon button at the top-right.
 */
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}


// ==========================================================================
// SECTION 1: CARD 1 TOKENIZER & VOCABULARY STATE
// ==========================================================================
let allUniqueTokens = [];
let tokenFrequencies = {};
let activeVocabMap = null; // Map<string, number>: maps token string to integer ID

/**
 * WHAT: Converts raw text into lowercase words and punctuation tokens.
 *
 * @param {string} text - Raw input text
 * @returns {string[]} An array of token strings
 */
function tokenize(text) {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const lowerText = text.toLowerCase();
  const tokenRegex = /[a-z0-9]+(?:'[a-z0-9]+)?|[.!?,]/g;
  const matchedTokens = lowerText.match(tokenRegex);

  return matchedTokens || [];
}

/**
 * WHAT: Counts occurrences of each token in an array of tokens.
 *
 * @param {string[]} tokens - Array of token strings
 * @returns {Record<string, number>} Object mapping token string to frequency count
 */
function countFrequencies(tokens) {
  const frequencyMap = {};

  for (const token of tokens) {
    if (frequencyMap[token]) {
      frequencyMap[token] += 1;
    } else {
      frequencyMap[token] = 1;
    }
  }

  return frequencyMap;
}

/**
 * WHAT: Splits a dropped word into smaller subword pieces using LONGEST MATCH FIRST.
 *
 * @param {string} word - The dropped word to be decomposed
 * @param {Set<string>} keptWordsSet - Set of whole words retained in the vocabulary
 * @returns {string[]} Array of subword pieces (e.g. ["sun", "##n", "##y"])
 */
function splitDroppedWord(word, keptWordsSet) {
  const pieces = [];

  let firstPiece = null;
  for (let len = word.length - 1; len >= 1; len--) {
    const candidatePrefix = word.slice(0, len);
    if (keptWordsSet.has(candidatePrefix)) {
      firstPiece = candidatePrefix;
      break;
    }
  }

  if (!firstPiece) {
    firstPiece = word[0];
  }

  pieces.push(firstPiece);
  let cursor = firstPiece.length;

  while (cursor < word.length) {
    let matchedPiece = null;

    for (let len = word.length - cursor; len > 1; len--) {
      const candidateSlice = word.slice(cursor, cursor + len);
      if (keptWordsSet.has(candidateSlice)) {
        matchedPiece = "##" + candidateSlice;
        cursor += len;
        break;
      }
    }

    if (!matchedPiece) {
      matchedPiece = "##" + word[cursor];
      cursor += 1;
    }

    pieces.push(matchedPiece);
  }

  return pieces;
}

/**
 * WHAT: Reconstructs the vocabulary given how many words are kept (X).
 *
 * @param {number} keptCount - The number of words (X) to retain in the vocabulary
 * @returns {Array<{id: number, token: string, frequency: number | string, isSubword?: boolean}>}
 */
function buildVocabularyWithSubwords(keptCount) {
  const keptWords = allUniqueTokens.slice(0, keptCount);
  const droppedWords = allUniqueTokens.slice(keptCount);
  const keptWordsSet = new Set(keptWords);

  const subwordFreqMap = {};
  const subwordList = [];
  const subwordSet = new Set();

  for (const droppedWord of droppedWords) {
    const pieces = splitDroppedWord(droppedWord, keptWordsSet);
    const wordFreq = tokenFrequencies[droppedWord] || 1;

    for (const piece of pieces) {
      if (!keptWordsSet.has(piece) && !subwordSet.has(piece)) {
        subwordSet.add(piece);
        subwordList.push(piece);
        subwordFreqMap[piece] = wordFreq;
      } else if (subwordFreqMap[piece]) {
        subwordFreqMap[piece] += wordFreq;
      }
    }

    if (/^[a-z]/.test(droppedWord)) {
      for (const ch of droppedWord) {
        if (ch !== "'") {
          const subChar = "##" + ch;
          if (!keptWordsSet.has(subChar) && !subwordSet.has(subChar)) {
            subwordSet.add(subChar);
            subwordList.push(subChar);
            subwordFreqMap[subChar] = wordFreq;
          }
        }
      }
    }
  }

  const vocabulary = [
    {
      id: 0,
      token: '[UNK]',
      frequency: '-'
    }
  ];

  let nextId = 1;

  for (const word of keptWords) {
    vocabulary.push({
      id: nextId++,
      token: word,
      frequency: tokenFrequencies[word] || 1
    });
  }

  for (const piece of subwordList) {
    vocabulary.push({
      id: nextId++,
      token: piece,
      frequency: subwordFreqMap[piece] || 1,
      isSubword: true
    });
  }

  activeVocabMap = new Map();
  for (const entry of vocabulary) {
    activeVocabMap.set(entry.token, entry.id);
  }

  return vocabulary;
}

/**
 * WHAT: Renders vocabulary size and sticky table rows.
 *
 * @param {Array<{id: number, token: string, frequency: number | string, isSubword?: boolean}>} vocabulary
 * @param {number} keptCount
 */
function renderVocabularyTable(vocabulary, keptCount) {
  const sizeDisplay = document.getElementById('vocab-size-display');
  const tableBody = document.getElementById('vocab-table-body');

  if (!sizeDisplay || !tableBody) return;

  const totalTokens = vocabulary.length;
  sizeDisplay.textContent = `Vocabulary size: ${totalTokens} tokens (${keptCount} words + subword pieces + [UNK])`;

  tableBody.innerHTML = '';

  for (const entry of vocabulary) {
    const row = document.createElement('tr');

    const idCell = document.createElement('td');
    idCell.className = 'cell-id';
    idCell.textContent = entry.id;

    const tokenCell = document.createElement('td');
    tokenCell.className = 'cell-token';

    if (entry.token === '[UNK]') {
      tokenCell.classList.add('special-token');
    } else if (entry.isSubword || entry.token.startsWith('##')) {
      tokenCell.classList.add('subword-token');
    }

    tokenCell.textContent = entry.token;

    const freqCell = document.createElement('td');
    freqCell.className = 'cell-freq';
    freqCell.textContent = entry.frequency;

    row.appendChild(idCell);
    row.appendChild(tokenCell);
    row.appendChild(freqCell);

    tableBody.appendChild(row);
  }
}

/**
 * WHAT: Encodes an input sentence into tokens against the active vocabulary.
 *
 * @param {string} sentence - The sentence to encode
 * @param {Map<string, number>} vocabMap - Lookup map of active tokens to IDs
 * @returns {Array<{token: string, id: number, type: 'word' | 'subword' | 'punct' | 'unk'}>}
 */
function encodeSentence(sentence, vocabMap) {
  if (!vocabMap || vocabMap.size === 0) {
    return [];
  }

  const rawTokens = sentence.match(/[a-z0-9]+(?:'[a-z0-9]+)?|[.!?,]/gi) || [];
  const encodedTokens = [];

  for (const raw of rawTokens) {
    const lower = raw.toLowerCase();
    const isPunctuation = /^[.!?,]$/.test(lower);

    if (vocabMap.has(lower)) {
      encodedTokens.push({
        token: lower,
        id: vocabMap.get(lower),
        type: isPunctuation ? 'punct' : 'word'
      });
      continue;
    }

    if (isPunctuation) {
      encodedTokens.push({
        token: '[UNK]',
        id: 0,
        type: 'unk'
      });
      continue;
    }

    let firstMatch = null;
    let firstLen = 0;

    for (let len = lower.length - 1; len >= 1; len--) {
      const candidate = lower.slice(0, len);
      if (vocabMap.has(candidate)) {
        firstMatch = candidate;
        firstLen = len;
        break;
      }
    }

    if (!firstMatch) {
      encodedTokens.push({
        token: '[UNK]',
        id: 0,
        type: 'unk'
      });
      continue;
    }

    const wordPieces = [
      {
        token: firstMatch,
        id: vocabMap.get(firstMatch),
        type: 'word'
      }
    ];

    let cursor = firstLen;
    let canDecompose = true;

    while (cursor < lower.length) {
      let subMatch = null;
      let subLen = 0;

      for (let len = lower.length - cursor; len >= 1; len--) {
        const candidate = "##" + lower.slice(cursor, cursor + len);
        if (vocabMap.has(candidate)) {
          subMatch = candidate;
          subLen = len;
          break;
        }
      }

      if (!subMatch) {
        canDecompose = false;
        break;
      }

      wordPieces.push({
        token: subMatch,
        id: vocabMap.get(subMatch),
        type: 'subword'
      });
      cursor += subLen;
    }

    if (!canDecompose) {
      encodedTokens.push({
        token: '[UNK]',
        id: 0,
        type: 'unk'
      });
    } else {
      encodedTokens.push(...wordPieces);
    }
  }

  return encodedTokens;
}

/**
 * WHAT: Helper to create colored token chips container DOM element.
 *
 * @param {Array<{token: string, id: number, type: 'word' | 'subword' | 'punct' | 'unk'}>} tokens
 * @returns {HTMLElement} Container with chips
 */
function createChipsElement(tokens) {
  const container = document.createElement('div');
  container.className = 'chips-container';

  for (const item of tokens) {
    const chip = document.createElement('div');
    chip.className = `token-chip chip-${item.type}`;

    const tokenSpan = document.createElement('span');
    tokenSpan.className = 'chip-token';
    tokenSpan.textContent = item.token;

    const idSpan = document.createElement('span');
    idSpan.className = 'chip-id';
    idSpan.textContent = item.id;

    chip.appendChild(tokenSpan);
    chip.appendChild(idSpan);

    container.appendChild(chip);
  }

  return container;
}

/**
 * WHAT: Renders encoded tokens as colored chips and calculates 3 stats for Card 1.
 *
 * @param {Array<{token: string, id: number, type: 'word' | 'subword' | 'punct' | 'unk'}>} tokens
 * @param {string} rawSentence
 */
function renderEncodedChips(tokens, rawSentence) {
  const chipsContainer = document.getElementById('chips-container');
  const statChars = document.getElementById('stat-chars');
  const statTokens = document.getElementById('stat-tokens');
  const statCpt = document.getElementById('stat-cpt');

  if (!chipsContainer) return;

  chipsContainer.innerHTML = '';

  if (!activeVocabMap || activeVocabMap.size === 0) {
    chipsContainer.innerHTML = '<div class="friendly-message">Vocabulary has not been built yet. Click "Build vocabulary" above first!</div>';
    if (statChars) statChars.textContent = '0';
    if (statTokens) statTokens.textContent = '0';
    if (statCpt) statCpt.textContent = '0.00';
    return;
  }

  const chipsElem = createChipsElement(tokens);
  chipsContainer.appendChild(chipsElem);

  const charCount = rawSentence ? rawSentence.length : 0;
  const tokenCount = tokens.length;
  const charsPerToken = tokenCount > 0 ? (charCount / tokenCount).toFixed(2) : '0.00';

  if (statChars) statChars.textContent = charCount;
  if (statTokens) statTokens.textContent = tokenCount;
  if (statCpt) statCpt.textContent = charsPerToken;
}

/**
 * WHAT: Handler to encode sentence on user input in Card 1.
 */
function handleEncode() {
  const textarea = document.getElementById('encode-input');
  const sentence = textarea ? textarea.value : '';

  const encodedTokens = encodeSentence(sentence, activeVocabMap);
  renderEncodedChips(encodedTokens, sentence);
}

/**
 * WHAT: Handler for slider movement in Card 1.
 */
function handleSliderInput(event) {
  const slider = event.target;
  const keptCount = parseInt(slider.value, 10);
  const totalWords = allUniqueTokens.length;

  const keptCountSpan = document.getElementById('kept-count');
  const totalCountSpan = document.getElementById('total-words-count');
  if (keptCountSpan) keptCountSpan.textContent = keptCount;
  if (totalCountSpan) totalCountSpan.textContent = totalWords;

  const vocabulary = buildVocabularyWithSubwords(keptCount);
  renderVocabularyTable(vocabulary, keptCount);

  handleEncode();
}

/**
 * WHAT: Handler to build Card 1 vocabulary.
 */
function handleBuildVocabulary() {
  const textarea = document.getElementById('sentences-input');
  if (!textarea) return;

  const rawText = textarea.value;
  const tokens = tokenize(rawText);
  tokenFrequencies = countFrequencies(tokens);

  allUniqueTokens = Object.keys(tokenFrequencies).sort((a, b) => {
    const diff = tokenFrequencies[b] - tokenFrequencies[a];
    if (diff !== 0) return diff;
    return a.localeCompare(b);
  });

  const totalWords = allUniqueTokens.length;

  const slider = document.getElementById('vocab-slider');
  const keptCountSpan = document.getElementById('kept-count');
  const totalCountSpan = document.getElementById('total-words-count');

  if (slider) {
    slider.min = "1";
    slider.max = String(totalWords);
    slider.value = String(totalWords);
  }

  if (keptCountSpan) keptCountSpan.textContent = totalWords;
  if (totalCountSpan) totalCountSpan.textContent = totalWords;

  const vocabulary = buildVocabularyWithSubwords(totalWords);
  renderVocabularyTable(vocabulary, totalWords);

  handleEncode();
}


// ==========================================================================
// SECTION 2: CARD 2 EMBEDDING MATH (64-D VECTORS)
// ==========================================================================

let lastCorpusSentences = [];
let lastCorpusVectors = [];
let lastWordVectors = new Map();
let lastPcaComponents = [];
let lastPcaMean = null;
let lastPcaScale = 1.0;
let user3DPoint = null;

/**
 * WHAT: Mulberry32 seeded Pseudo-Random Number Generator (PRNG).
 *
 * @param {number} seed - Starting integer seed
 * @returns {() => number} Function returning uniform pseudo-random floats in [0, 1)
 */
function createSeededPRNG(seed) {
  let state = seed >>> 0;
  return function() {
    state = (state + 0x6D2B79F5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * WHAT: Box-Muller transform to generate standard normal random numbers (mean 0, variance 1).
 *
 * @param {() => number} rng - Seeded uniform random generator
 * @returns {number} Standard normal random float
 */
function randomGaussian(rng) {
  let u = 0;
  let v = 0;
  while (u === 0) u = rng();
  while (v === 0) v = rng();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

/**
 * WHAT: Extracts cleaned lowercase words from a sentence string.
 *
 * @param {string} text - A line of text
 * @returns {string[]} Lowercase word tokens
 */
function extractSentenceWords(text) {
  if (!text || typeof text !== 'string') return [];
  const words = text.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g);
  return words || [];
}

/**
 * WHAT: Builds a word co-occurrence matrix using a sliding context window of 2.
 *
 * @param {string[][]} tokenizedSentences - Sentences as arrays of word tokens
 * @param {string[]} vocab - Unique word list
 * @param {Map<string, number>} vocabIndex - Map from word to its index
 * @param {number} windowSize - Window size (2 words before and after)
 * @returns {Float64Array[]} Co-occurrence matrix of size |V| x |V|
 */
function buildCooccurrenceMatrix(tokenizedSentences, vocab, vocabIndex, windowSize = 2) {
  const V = vocab.length;
  const matrix = Array.from({ length: V }, () => new Float64Array(V));

  for (const sentence of tokenizedSentences) {
    for (let i = 0; i < sentence.length; i++) {
      const word1 = sentence[i];
      const idx1 = vocabIndex.get(word1);
      if (idx1 === undefined) continue;

      const start = Math.max(0, i - windowSize);
      const end = Math.min(sentence.length - 1, i + windowSize);

      for (let j = start; j <= end; j++) {
        if (i === j) continue;

        const word2 = sentence[j];
        const idx2 = vocabIndex.get(word2);
        if (idx2 === undefined) continue;

        matrix[idx1][idx2] += 1;
      }
    }
  }

  return matrix;
}

/**
 * WHAT: Generates a seeded random projection matrix of size |V| x 64.
 *
 * @param {number} vocabSize - Rows (|V|)
 * @param {number} targetDim - Target dimension (64)
 * @param {number} seed - Deterministic seed
 * @returns {Float64Array[]} Matrix of size |V| x 64
 */
function generateRandomProjectionMatrix(vocabSize, targetDim = 64, seed = 42) {
  const rng = createSeededPRNG(seed);
  const scale = 1.0 / Math.sqrt(targetDim);
  const projectionMatrix = [];

  for (let i = 0; i < vocabSize; i++) {
    const row = new Float64Array(targetDim);
    for (let d = 0; d < targetDim; d++) {
      row[d] = randomGaussian(rng) * scale;
    }
    projectionMatrix.push(row);
  }

  return projectionMatrix;
}

/**
 * WHAT: Multiplies co-occurrence matrix by projection matrix to compute 64-D vectors.
 *
 * @param {Float64Array[]} cooccurrence - |V| x |V| matrix
 * @param {Float64Array[]} projection - |V| x 64 matrix
 * @param {string[]} vocab - Unique word list
 * @param {number} targetDim - 64
 * @returns {Map<string, Float64Array>} Map from word to its 64-D embedding vector
 */
function buildWordVectors(cooccurrence, projection, vocab, targetDim = 64) {
  const V = vocab.length;
  const wordVectors = new Map();

  for (let i = 0; i < V; i++) {
    const wordVec = new Float64Array(targetDim);

    for (let d = 0; d < targetDim; d++) {
      let sum = 0;
      for (let k = 0; k < V; k++) {
        sum += cooccurrence[i][k] * projection[k][d];
      }
      wordVec[d] = sum;
    }

    wordVectors.set(vocab[i], wordVec);
  }

  return wordVectors;
}

/**
 * WHAT: Computes a sentence vector by averaging its word vectors and normalizing.
 *
 * @param {string[]} words - Words in the sentence
 * @param {Map<string, Float64Array>} wordVectors - 64-D word embeddings
 * @param {number} targetDim - 64
 * @returns {Float64Array} Normalized 64-dimensional sentence vector
 */
function computeSentenceVector(words, wordVectors, targetDim = 64) {
  const sumVec = new Float64Array(targetDim);
  let validWordCount = 0;

  for (const word of words) {
    if (wordVectors.has(word)) {
      const vec = wordVectors.get(word);
      for (let d = 0; d < targetDim; d++) {
        sumVec[d] += vec[d];
      }
      validWordCount++;
    }
  }

  if (validWordCount === 0) {
    return new Float64Array(targetDim);
  }

  for (let d = 0; d < targetDim; d++) {
    sumVec[d] /= validWordCount;
  }

  let normSq = 0;
  for (let d = 0; d < targetDim; d++) {
    normSq += sumVec[d] * sumVec[d];
  }
  const norm = Math.sqrt(normSq);

  if (norm > 0) {
    for (let d = 0; d < targetDim; d++) {
      sumVec[d] /= norm;
    }
  } else {
    return new Float64Array(targetDim);
  }

  return sumVec;
}


// ==========================================================================
// SECTION 3: STAGE 6 - PCA VIA POWER ITERATION & 3D CANVAS VISUALIZER
// ==========================================================================

/**
 * WHAT: Reduces 64-D vectors to 3D (PC1, PC2, PC3) using PCA via Power Iteration.
 *
 * @param {Float64Array[]} vectors - Array of 64-D normalized sentence vectors
 * @returns {Array<[number, number, number]>} Array of 3D points [pc1, pc2, pc3]
 */
function computePCA3D(vectors) {
  const N = vectors.length;
  if (N === 0) return [];
  const D = vectors[0].length;

  const mean = new Float64Array(D);
  for (let i = 0; i < N; i++) {
    for (let d = 0; d < D; d++) {
      mean[d] += vectors[i][d];
    }
  }
  for (let d = 0; d < D; d++) {
    mean[d] /= N;
  }
  lastPcaMean = mean;

  const centered = vectors.map(vec => {
    const row = new Float64Array(D);
    for (let d = 0; d < D; d++) {
      row[d] = vec[d] - mean[d];
    }
    return row;
  });

  function multiplyCovariance(v, existingComponents) {
    const Xv = new Float64Array(N);
    for (let i = 0; i < N; i++) {
      let dot = 0;
      for (let d = 0; d < D; d++) dot += centered[i][d] * v[d];
      Xv[i] = dot;
    }

    const res = new Float64Array(D);
    for (let d = 0; d < D; d++) {
      let sum = 0;
      for (let i = 0; i < N; i++) sum += centered[i][d] * Xv[i];
      res[d] = sum / N;
    }

    for (const comp of existingComponents) {
      let dot = 0;
      for (let d = 0; d < D; d++) dot += res[d] * comp[d];
      for (let d = 0; d < D; d++) res[d] -= dot * comp[d];
    }

    return res;
  }

  const components = [];
  const prng = createSeededPRNG(1337);

  for (let c = 0; c < 3; c++) {
    let v = new Float64Array(D);
    for (let d = 0; d < D; d++) v[d] = prng() - 0.5;

    let norm = Math.hypot(...v);
    if (norm > 0) {
      for (let d = 0; d < D; d++) v[d] /= norm;
    }

    for (let iter = 0; iter < 30; iter++) {
      const nextV = multiplyCovariance(v, components);
      norm = Math.hypot(...nextV);
      if (norm > 1e-9) {
        for (let d = 0; d < D; d++) v[d] = nextV[d] / norm;
      }
    }

    components.push(v);
  }
  lastPcaComponents = components;

  const projectedPoints = centered.map(row => {
    const p3d = [0, 0, 0];
    for (let c = 0; c < 3; c++) {
      let dot = 0;
      for (let d = 0; d < D; d++) dot += row[d] * components[c][d];
      p3d[c] = dot;
    }
    return p3d;
  });

  let maxAbs = 0;
  for (const pt of projectedPoints) {
    maxAbs = Math.max(maxAbs, Math.abs(pt[0]), Math.abs(pt[1]), Math.abs(pt[2]));
  }
  const scale = maxAbs > 1e-6 ? 0.75 / maxAbs : 1.0;
  lastPcaScale = scale;

  return projectedPoints.map(pt => [pt[0] * scale, pt[1] * scale, pt[2] * scale]);
}

// 3D Canvas Rendering State
let plotPoints3D = [];
let rotationX = 0.35;
let rotationY = -0.65;
let isDragging = false;
let lastPointerX = 0;
let lastPointerY = 0;

/**
 * WHAT: Projects 3D world coordinates onto the 2D canvas with perspective.
 *
 * @param {[number, number, number]} point3D - [x, y, z] in [-1, 1]
 * @param {number} width - Canvas display width
 * @param {number} height - Canvas display height
 * @returns {{ x: number, y: number, zCam: number, scale: number, visible: boolean }}
 */
function project3DTo2D(point3D, width, height) {
  const [x, y, z] = point3D;

  const cosY = Math.cos(rotationY);
  const sinY = Math.sin(rotationY);
  const x1 = x * cosY + z * sinY;
  const y1 = y;
  const z1 = -x * sinY + z * cosY;

  const cosX = Math.cos(rotationX);
  const sinX = Math.sin(rotationX);
  const x2 = x1;
  const y2 = y1 * cosX - z1 * sinX;
  const z2 = y1 * sinX + z1 * cosX;

  const cameraDistance = 3.4;
  const zCam = z2 + cameraDistance;
  const focalLength = Math.min(width, height) * 0.95;

  if (zCam <= 0.1) {
    return { x: 0, y: 0, zCam: zCam, scale: 0, visible: false };
  }

  const projScale = focalLength / zCam;
  const screenX = width / 2 + x2 * projScale;
  const screenY = height / 2 - y2 * projScale;

  return {
    x: screenX,
    y: screenY,
    zCam: zCam,
    scale: projScale,
    visible: true
  };
}

/**
 * WHAT: Reads a CSS color variable value from :root.
 *
 * @param {string} varName
 * @param {string} fallback
 * @returns {string}
 */
function getCssColor(varName, fallback) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName);
  return value ? value.trim() : fallback;
}

/**
 * WHAT: Renders the 3D scene on the <canvas>, using updated pink-shade palette.
 * No blue colors used:
 * - Graph points use --magenta
 * - User's point uses --peach
 * - Axes use --rose, --pink, --mauve
 * - Grid uses --border
 */
function render3DCanvas() {
  const canvas = document.getElementById('embedding-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const cssWidth = rect.width || 800;
  const cssHeight = rect.height || 480;

  if (canvas.width !== Math.round(cssWidth * dpr) || canvas.height !== Math.round(cssHeight * dpr)) {
    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
  }

  ctx.save();
  ctx.scale(dpr, dpr);

  // Background using surface-2 (no blue)
  const bgColor = getCssColor('--surface-2', '#2f2238');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  // Read theme colors from CSS variables
  const borderColor = getCssColor('--border', '#44304f');
  const textColor = getCssColor('--text', '#fbeef5');
  const textMuted = getCssColor('--text-dim', '#c3a6b8');
  const axisColorX = getCssColor('--rose', '#ff8fb8');
  const axisColorY = getCssColor('--pink', '#ff5fa2');
  const axisColorZ = getCssColor('--mauve', '#b693d6');
  const pointColor = getCssColor('--magenta', '#d946ef'); // Required: graph points use --magenta
  const userPointColor = getCssColor('--peach', '#ffb38a'); // Required: user's point uses --peach

  // Bottom floor grid lines
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);

  for (let g = -1; g <= 1; g += 0.5) {
    const pStart1 = project3DTo2D([-1, -1, g], cssWidth, cssHeight);
    const pEnd1 = project3DTo2D([1, -1, g], cssWidth, cssHeight);
    if (pStart1.visible && pEnd1.visible) {
      ctx.beginPath();
      ctx.moveTo(pStart1.x, pStart1.y);
      ctx.lineTo(pEnd1.x, pEnd1.y);
      ctx.stroke();
    }

    const pStart2 = project3DTo2D([g, -1, -1], cssWidth, cssHeight);
    const pEnd2 = project3DTo2D([g, -1, 1], cssWidth, cssHeight);
    if (pStart2.visible && pEnd2.visible) {
      ctx.beginPath();
      ctx.moveTo(pStart2.x, pStart2.y);
      ctx.lineTo(pEnd2.x, pEnd2.y);
      ctx.stroke();
    }
  }

  ctx.setLineDash([]);

  // Bounding box edges
  const cubeCorners = [
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    [-1, -1,  1], [1, -1,  1], [1, 1,  1], [-1, 1,  1]
  ];

  const cubeEdges = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7]
  ];

  ctx.strokeStyle = borderColor;
  for (const [i1, i2] of cubeEdges) {
    const p1 = project3DTo2D(cubeCorners[i1], cssWidth, cssHeight);
    const p2 = project3DTo2D(cubeCorners[i2], cssWidth, cssHeight);
    if (p1.visible && p2.visible) {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }
  }

  // 3 labeled axes with ticks (PC1, PC2, PC3)
  ctx.font = '11px ' + getCssColor('--font-mono', 'monospace');
  ctx.lineWidth = 1.5;

  const axes = [
    { label: 'PC1 (X)', start: [-1.1, 0, 0], end: [1.1, 0, 0], color: axisColorX, dir: 'x' },
    { label: 'PC2 (Y)', start: [0, -1.1, 0], end: [0, 1.1, 0], color: axisColorY, dir: 'y' },
    { label: 'PC3 (Z)', start: [0, 0, -1.1], end: [0, 0, 1.1], color: axisColorZ, dir: 'z' }
  ];

  for (const axis of axes) {
    const pStart = project3DTo2D(axis.start, cssWidth, cssHeight);
    const pEnd = project3DTo2D(axis.end, cssWidth, cssHeight);

    if (pStart.visible && pEnd.visible) {
      ctx.strokeStyle = axis.color;
      ctx.beginPath();
      ctx.moveTo(pStart.x, pStart.y);
      ctx.lineTo(pEnd.x, pEnd.y);
      ctx.stroke();

      ctx.fillStyle = axis.color;
      ctx.fillText(axis.label, pEnd.x + 6, pEnd.y + 4);

      const ticks = [-1, 0, 1];
      for (const t of ticks) {
        let tickPos = [0, 0, 0];
        if (axis.dir === 'x') tickPos = [t, 0, 0];
        if (axis.dir === 'y') tickPos = [0, t, 0];
        if (axis.dir === 'z') tickPos = [0, 0, t];

        const pTick = project3DTo2D(tickPos, cssWidth, cssHeight);
        if (pTick.visible) {
          ctx.fillStyle = textMuted;
          ctx.beginPath();
          ctx.arc(pTick.x, pTick.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillText(t > 0 ? `+${t}` : `${t}`, pTick.x + 4, pTick.y - 4);
        }
      }
    }
  }

  // Combine corpus points and any custom user point
  const allPoints = [...plotPoints3D];
  if (user3DPoint) {
    allPoints.push(user3DPoint);
  }

  // Draw points and labels (Painter's algorithm: depth-sorted)
  const projectedPoints = allPoints.map(item => {
    const proj = project3DTo2D(item.point, cssWidth, cssHeight);
    return {
      ...item,
      proj: proj
    };
  }).filter(item => item.proj.visible);

  projectedPoints.sort((a, b) => b.proj.zCam - a.proj.zCam);

  ctx.font = '12px ' + getCssColor('--font-sans', 'sans-serif');

  for (const item of projectedPoints) {
    const { x, y, zCam } = item.proj;
    const isUser = item.isUser === true;

    const baseRadius = isUser ? 8.5 : 6.5;
    const radius = Math.max(3.5, Math.min(16, baseRadius * (3.4 / zCam)));

    // Outer glow ring
    ctx.beginPath();
    ctx.arc(x, y, radius + 3, 0, Math.PI * 2);
    ctx.fillStyle = isUser ? 'rgba(255, 179, 138, 0.35)' : 'rgba(217, 70, 239, 0.25)';
    ctx.fill();

    // Solid inner point
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = isUser ? userPointColor : pointColor;
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = isUser ? 2.0 : 1.5;
    ctx.stroke();

    // Label text
    let labelText = '';
    if (isUser) {
      labelText = item.label;
    } else {
      const shortLabel = item.label.length > 15
        ? item.label.slice(0, 15) + '...'
        : item.label;
      labelText = `${item.index + 1}. ${shortLabel}`;
    }

    const textWidth = ctx.measureText(labelText).width;

    const pillX = x + radius + 5;
    const pillY = y - 9;

    // Semi-transparent label background pill using surface color
    const surfaceColor = getCssColor('--surface', '#251a2c');
    ctx.fillStyle = surfaceColor;
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(pillX - 4, pillY - 10, textWidth + 8, 16, 4);
    } else {
      ctx.rect(pillX - 4, pillY - 10, textWidth + 8, 16);
    }
    ctx.fill();

    ctx.strokeStyle = isUser ? userPointColor : borderColor;
    ctx.lineWidth = isUser ? 1.5 : 1;
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.fillText(labelText, pillX, pillY + 2);
  }

  ctx.restore();
}

/**
 * WHAT: Connects mouse and touch listeners to the 3D canvas wrapper.
 */
function initCanvasInteraction() {
  const wrapper = document.querySelector('.canvas-wrapper');
  if (!wrapper) return;

  function onPointerDown(clientX, clientY) {
    isDragging = true;
    lastPointerX = clientX;
    lastPointerY = clientY;
  }

  function onPointerMove(clientX, clientY) {
    if (!isDragging) return;

    const deltaX = clientX - lastPointerX;
    const deltaY = clientY - lastPointerY;

    lastPointerX = clientX;
    lastPointerY = clientY;

    rotationY += deltaX * 0.008;
    rotationX += deltaY * 0.008;

    const maxPitch = 1.4;
    rotationX = Math.max(-maxPitch, Math.min(maxPitch, rotationX));

    render3DCanvas();
  }

  function onPointerUp() {
    isDragging = false;
  }

  wrapper.addEventListener('mousedown', (e) => onPointerDown(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', onPointerUp);

  wrapper.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches.length === 1) {
      onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchend', onPointerUp);

  window.addEventListener('resize', () => {
    render3DCanvas();
  });
}

/**
 * WHAT: Resets the 3D camera rotation angles back to the default vantage point.
 */
function handleResetView() {
  rotationX = 0.35;
  rotationY = -0.65;
  render3DCanvas();
}


// ==========================================================================
// SECTION 4: STAGE 7 - COSINE SIMILARITY & CLOSEST SENTENCE PAIRS
// ==========================================================================

/**
 * WHAT: Checks if a vector is all zeros.
 *
 * @param {Float64Array} vec - Embedding vector
 * @returns {boolean} True if all components are zero
 */
function isZeroVector(vec) {
  for (let d = 0; d < vec.length; d++) {
    if (Math.abs(vec[d]) > 1e-9) {
      return false;
    }
  }
  return true;
}

/**
 * WHAT: Computes cosine similarity between two normalized vectors.
 *
 * @param {Float64Array} v1
 * @param {Float64Array} v2
 * @returns {number} Cosine similarity float between -1.0 and 1.0
 */
function computeCosineSimilarity(v1, v2) {
  let dotProduct = 0;
  for (let d = 0; d < v1.length; d++) {
    dotProduct += v1[d] * v2[d];
  }
  return Math.max(-1, Math.min(1, dotProduct));
}

/**
 * WHAT: Finds top N closest pairs among all corpus sentences.
 *
 * @param {string[]} sentences
 * @param {Float64Array[]} vectors
 * @param {number} topN
 * @returns {Array<{sentenceA: string, sentenceB: string, similarity: number}>}
 */
function findClosestPairs(sentences, vectors, topN = 5) {
  const pairs = [];
  const N = sentences.length;

  for (let i = 0; i < N; i++) {
    if (isZeroVector(vectors[i])) continue;

    for (let j = i + 1; j < N; j++) {
      if (isZeroVector(vectors[j])) continue;

      const sim = computeCosineSimilarity(vectors[i], vectors[j]);
      pairs.push({
        sentenceA: sentences[i],
        sentenceB: sentences[j],
        similarity: sim
      });
    }
  }

  pairs.sort((a, b) => b.similarity - a.similarity);

  return pairs.slice(0, topN);
}

/**
 * WHAT: Renders the top 5 closest pairs table into the DOM.
 *
 * @param {Array<{sentenceA: string, sentenceB: string, similarity: number}>} pairs
 */
function renderClosestPairsTable(pairs) {
  const tableBody = document.getElementById('pairs-table-body');
  if (!tableBody) return;

  tableBody.innerHTML = '';

  if (pairs.length === 0) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.colSpan = 3;
    cell.className = 'cell-empty';
    cell.textContent = 'No comparable sentence pairs found.';
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  for (const pair of pairs) {
    const row = document.createElement('tr');

    const cellA = document.createElement('td');
    cellA.className = 'cell-sentence';
    cellA.textContent = pair.sentenceA;

    const cellB = document.createElement('td');
    cellB.className = 'cell-sentence';
    cellB.textContent = pair.sentenceB;

    const cellSim = document.createElement('td');
    cellSim.className = 'cell-sim';
    cellSim.textContent = pair.similarity.toFixed(3);

    row.appendChild(cellA);
    row.appendChild(cellB);
    row.appendChild(cellSim);

    tableBody.appendChild(row);
  }
}

/**
 * WHAT: Handler for the "Embed and plot" button in Card 2.
 */
function handleEmbedAndPlot() {
  const textarea = document.getElementById('embed-sentences-input');
  const resultsContainer = document.getElementById('embedding-results');

  if (!textarea || !resultsContainer) return;

  const rawLines = textarea.value.split('\n');
  const sentences = rawLines
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (sentences.length === 0) {
    resultsContainer.innerHTML = '<div class="friendly-message">Please enter at least one sentence above.</div>';
    plotPoints3D = [];
    user3DPoint = null;
    lastCorpusSentences = [];
    lastCorpusVectors = [];
    render3DCanvas();
    renderClosestPairsTable([]);
    return;
  }

  // 1. Tokenize sentences into word tokens
  const tokenizedSentences = sentences.map(extractSentenceWords);

  // 2. Build vocabulary of unique words
  const vocabSet = new Set();
  tokenizedSentences.forEach(words => {
    words.forEach(w => vocabSet.add(w));
  });

  const vocab = Array.from(vocabSet).sort();
  const vocabIndex = new Map(vocab.map((w, idx) => [w, idx]));

  // 3. Count co-occurrences with window of 2
  const cooccurrence = buildCooccurrenceMatrix(tokenizedSentences, vocab, vocabIndex, 2);

  // 4. Generate 64-D random projection matrix with seeded PRNG (seed = 42)
  const targetDim = 64;
  const projectionMatrix = generateRandomProjectionMatrix(vocab.length, targetDim, 42);

  // 5. Build 64-number word vectors
  const wordVectors = buildWordVectors(cooccurrence, projectionMatrix, vocab, targetDim);
  lastWordVectors = wordVectors;

  // 6. Compute normalized 64-D sentence vectors
  const sentenceVectors = tokenizedSentences.map(words => {
    return computeSentenceVector(words, wordVectors, targetDim);
  });
  lastCorpusSentences = sentences;
  lastCorpusVectors = sentenceVectors;

  // 7. Reduce 64-D vectors to 3D (PC1, PC2, PC3) using hand-written PCA power iteration
  const points3D = computePCA3D(sentenceVectors);

  plotPoints3D = sentences.map((sentenceText, idx) => ({
    point: points3D[idx] || [0, 0, 0],
    label: sentenceText,
    index: idx
  }));

  // Re-render the 3D canvas
  render3DCanvas();

  // 8. Compute and render Closest Pairs table (Top 5, highest first)
  const closestPairs = findClosestPairs(sentences, sentenceVectors, 5);
  renderClosestPairsTable(closestPairs);

  // 9. Print first 8 numbers of each sentence vector below the canvas
  resultsContainer.innerHTML = '';

  sentences.forEach((sentenceText, idx) => {
    const vector = sentenceVectors[idx];
    const first8 = Array.from(vector.slice(0, 8));

    const formattedNumbers = first8
      .map(num => (num >= 0 ? ' ' : '') + num.toFixed(4))
      .join(', ');

    const card = document.createElement('div');
    card.className = 'sentence-vector-card';

    const header = document.createElement('div');
    header.className = 'sentence-vector-header';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'sentence-vector-text';
    titleSpan.textContent = `${idx + 1}. "${sentenceText}"`;

    const dimBadge = document.createElement('span');
    dimBadge.className = 'vector-dim-badge';
    dimBadge.textContent = '64-D Vector (showing 8)';

    header.appendChild(titleSpan);
    header.appendChild(dimBadge);

    const dataDiv = document.createElement('div');
    dataDiv.className = 'sentence-vector-data';
    dataDiv.textContent = `[${formattedNumbers}, ...]`;

    card.appendChild(header);
    card.appendChild(dataDiv);

    resultsContainer.appendChild(card);
  });
}


// ==========================================================================
// SECTION 5: STAGE 8 & 9 - CARD 3 "TRY YOUR OWN" PIPELINE
// Reuses: encodeSentence, extractSentenceWords, computeSentenceVector,
// computeCosineSimilarity, isZeroVector, and render3DCanvas.
// ==========================================================================

/**
 * WHAT: Handler for "Tokenize, embed & add to plot" in Card 3.
 */
function handleTryYourOwn() {
  const tryInput = document.getElementById('try-input');
  const tryOutput = document.getElementById('try-output');

  if (!tryInput || !tryOutput) return;

  const rawText = tryInput.value.trim();

  if (!activeVocabMap || activeVocabMap.size === 0 || lastCorpusSentences.length === 0 || !lastPcaMean) {
    tryOutput.innerHTML = '<div class="friendly-message">Vocabulary or sentences are missing. Please build the vocabulary in Card 1 and embed sentences in Card 2 first!</div>';
    return;
  }

  if (!rawText) {
    tryOutput.innerHTML = '<div class="friendly-message">Please enter a word or sentence above.</div>';
    return;
  }

  tryOutput.innerHTML = '';

  // ------------------------------------------------------------------------
  // STEP 1: TOKENS AND IDS (Reusing encodeSentence)
  // ------------------------------------------------------------------------
  const encodedTokens = encodeSentence(rawText, activeVocabMap);

  const isAllUnk = encodedTokens.length > 0 && encodedTokens.every(t => t.token === '[UNK]');

  if (isAllUnk || encodedTokens.length === 0) {
    const unkMessage = document.createElement('div');
    unkMessage.className = 'friendly-message';
    unkMessage.textContent = 'All words are unknown, so there is nothing to embed. Add this word to the sentences above and rebuild.';
    tryOutput.appendChild(unkMessage);

    user3DPoint = null;
    render3DCanvas();
    return;
  }

  const step1Card = document.createElement('div');
  step1Card.className = 'try-step';

  const step1Badge = document.createElement('span');
  step1Badge.className = 'step-badge';
  step1Badge.textContent = 'Step 1';

  const step1Title = document.createElement('span');
  step1Title.className = 'step-title';
  step1Title.textContent = 'Tokens and IDs';

  const chipsElem = createChipsElement(encodedTokens);

  step1Card.appendChild(step1Badge);
  step1Card.appendChild(step1Title);
  step1Card.appendChild(chipsElem);
  tryOutput.appendChild(step1Card);

  // ------------------------------------------------------------------------
  // STEP 2: VECTOR (FIRST 8 OF 64 NUMBERS ROUNDED TO 3 DECIMALS)
  // ------------------------------------------------------------------------
  const words = extractSentenceWords(rawText);
  const userVector = computeSentenceVector(words, lastWordVectors, 64);

  const step2Card = document.createElement('div');
  step2Card.className = 'try-step';

  const step2Badge = document.createElement('span');
  step2Badge.className = 'step-badge';
  step2Badge.textContent = 'Step 2';

  const step2Title = document.createElement('span');
  step2Title.className = 'step-title';
  step2Title.textContent = 'Vector (first 8 of 64 numbers)';

  const first8User = Array.from(userVector.slice(0, 8));
  const formattedFirst8 = first8User
    .map(num => (num >= 0 ? ' ' : '') + num.toFixed(3))
    .join(', ');

  const vectorData = document.createElement('div');
  vectorData.className = 'sentence-vector-data';
  vectorData.textContent = `[${formattedFirst8}, ...]`;

  step2Card.appendChild(step2Badge);
  step2Card.appendChild(step2Title);
  step2Card.appendChild(vectorData);
  tryOutput.appendChild(step2Card);

  // ------------------------------------------------------------------------
  // STEP 3: ADD TO 3D PLOT (USES --peach, LABELED "You: ...")
  // ------------------------------------------------------------------------
  if (lastPcaComponents.length === 3 && lastPcaMean) {
    const centeredUser = new Float64Array(64);
    for (let d = 0; d < 64; d++) {
      centeredUser[d] = userVector[d] - lastPcaMean[d];
    }

    const p3d = [0, 0, 0];
    for (let c = 0; c < 3; c++) {
      let dot = 0;
      for (let d = 0; d < 64; d++) {
        dot += centeredUser[d] * lastPcaComponents[c][d];
      }
      p3d[c] = dot * lastPcaScale;
    }

    const userShort = rawText.length > 15 ? rawText.slice(0, 15) + '...' : rawText;

    // Replace old point on each run
    user3DPoint = {
      point: p3d,
      label: `You: ${userShort}`,
      isUser: true
    };

    render3DCanvas();
  }

  const step3Card = document.createElement('div');
  step3Card.className = 'try-step';

  const step3Badge = document.createElement('span');
  step3Badge.className = 'step-badge';
  step3Badge.textContent = 'Step 3';

  const step3Title = document.createElement('span');
  step3Title.className = 'step-title';
  step3Title.textContent = 'Added to 3D plot';

  const step3Desc = document.createElement('p');
  step3Desc.className = 'step-desc';
  step3Desc.innerHTML = 'Added the sentence to the 3D plot above — <span class="user-point-highlight">it is the peach point</span>.';

  step3Card.appendChild(step3Badge);
  step3Card.appendChild(step3Title);
  step3Card.appendChild(step3Desc);
  tryOutput.appendChild(step3Card);

  // ------------------------------------------------------------------------
  // CLOSEST SENTENCES TABLE (TOP 3, WITH SIMILARITY)
  // ------------------------------------------------------------------------
  if (!isZeroVector(userVector) && lastCorpusSentences.length > 0) {
    const similarityScores = [];

    for (let i = 0; i < lastCorpusSentences.length; i++) {
      if (isZeroVector(lastCorpusVectors[i])) continue;

      const sim = computeCosineSimilarity(userVector, lastCorpusVectors[i]);
      similarityScores.push({
        sentence: lastCorpusSentences[i],
        similarity: sim
      });
    }

    similarityScores.sort((a, b) => b.similarity - a.similarity);
    const top3 = similarityScores.slice(0, 3);

    const closestSection = document.createElement('div');
    closestSection.className = 'closest-pairs-section';

    const closestTitle = document.createElement('h3');
    closestTitle.className = 'subsection-title';
    closestTitle.textContent = 'Closest sentences';

    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'table-container';

    const table = document.createElement('table');
    table.className = 'pairs-table';

    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th>Sentence</th>
        <th>Similarity</th>
      </tr>
    `;

    const tbody = document.createElement('tbody');
    for (const item of top3) {
      const row = document.createElement('tr');

      const cellText = document.createElement('td');
      cellText.className = 'cell-sentence';
      cellText.textContent = item.sentence;

      const cellSim = document.createElement('td');
      cellSim.className = 'cell-sim';
      cellSim.textContent = item.similarity.toFixed(3);

      row.appendChild(cellText);
      row.appendChild(cellSim);
      tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    tableWrapper.appendChild(table);

    closestSection.appendChild(closestTitle);
    closestSection.appendChild(tableWrapper);
    tryOutput.appendChild(closestSection);
  }
}

/**
 * WHAT: Initializes theme and event listeners once the DOM is ready.
 */
function initExplorer() {
  // Theme toggle button setup
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Card 1 listeners
  const buildButton = document.getElementById('build-vocab-btn');
  if (buildButton) {
    buildButton.addEventListener('click', handleBuildVocabulary);
  }

  const slider = document.getElementById('vocab-slider');
  if (slider) {
    slider.addEventListener('input', handleSliderInput);
  }

  const encodeButton = document.getElementById('encode-btn');
  if (encodeButton) {
    encodeButton.addEventListener('click', handleEncode);
  }

  // Card 2 listeners
  const embedButton = document.getElementById('embed-btn');
  if (embedButton) {
    embedButton.addEventListener('click', handleEmbedAndPlot);
  }

  const resetViewButton = document.getElementById('reset-view-btn');
  if (resetViewButton) {
    resetViewButton.addEventListener('click', handleResetView);
  }

  // Card 3 listeners
  const tryButton = document.getElementById('try-btn');
  if (tryButton) {
    tryButton.addEventListener('click', handleTryYourOwn);
  }

  // Initialize 3D canvas interaction (drag to rotate)
  initCanvasInteraction();

  // Initialize starting theme (from localStorage or system setting)
  const initialTheme = getStartingTheme();
  applyTheme(initialTheme);

  // Automatically initialize all cards on load
  handleBuildVocabulary();
  handleEmbedAndPlot();
  handleTryYourOwn();
}

// Start application once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExplorer);
} else {
  initExplorer();
}
