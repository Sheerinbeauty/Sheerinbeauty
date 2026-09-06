'use client'

import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="bg-beige py-12 md:py-20 border-b-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-64 h-80 bg-gradient-to-b from-gold/20 to-rose/20 rounded-2xl flex items-center justify-center border-4 border-gold/30">
              <div className="text-center text-brown/50">
                <p className="text-sm">Add your beauty image</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-gold/30">
              <div className="text-center">
                <div className="text-4xl font-serif text-gold font-bold mb-2">✨</div>
                <div className="text-2xl font-serif text-brown font-bold">Beauty</div>
                <div className="text-3xl font-serif text-gold font-bold italic">Sheerin</div>
                <div className="text-xs text-brown/60 mt-2">Elegance & Care</div>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-serif text-brown italic font-semibold max-w-md leading-relaxed">
              Enhancing your natural beauty with personalized care.
            </p>
            <div className="mt-8 flex flex-col gap-4 w-full">
              <button className="btn-gold flex items-center justify-center gap-2 w-full md:w-64 mx-auto">
                Laser & Skincare <ChevronRight size={18} />
              </button>
              <button className="btn-gold flex items-center justify-center gap-2 w-full md:w-64 mx-auto bg-rose hover:bg-darkBrown">
                Hair Services <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-80 bg-gradient-to-b from-rose/20 to-gold/20 rounded-2xl flex items-center justify-center border-4 border-gold/30">
              <div className="text-center text-brown/50">
                <p className="text-sm">Add your beauty image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}