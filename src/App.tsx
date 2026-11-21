import React from 'react'
import Hero18 from '@/components/originkit/hero-18'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Originkit Hero 18 Section */}
      <section className="relative w-full">
        <Hero18 />
      </section>

      {/* LLM Pipeline Explorer Section */}
      <section id="pipeline-explorer" className="w-full py-12 px-4 bg-[#1b1220] border-t border-[#44304f]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#fbeef5] mb-2">
              Interactive LLM Pipeline Explorer
            </h2>
            <p className="text-[#c3a6b8]">
              Tokenize text, compute 64-D embeddings, and visualize tokens in 3D space below.
            </p>
          </div>
          <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-[#44304f] bg-[#1b1220]">
            <iframe
              src="/pipeline.html"
              title="LLM Pipeline Explorer"
              className="w-full h-[1800px] border-none"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
