'use client'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-beige border-y-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-brown mb-12 text-center">About Sheerin Beauty</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-80 h-96 bg-gradient-to-b from-gold/30 to-rose/30 rounded-xl flex items-center justify-center border-4 border-gold/40 shadow-lg">
              <div className="text-center text-brown/50"><p className="text-sm">Add Sheerin's photo</p></div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-brown mb-3">Welcome to Sheerin Beauty</h3>
              <p className="text-brown/80 leading-relaxed">At Sheerin Beauty, every client receives personal, one-on-one care from Sheerin herself. With more than 25 years of experience in hair, skincare, and beauty services, Sheerin is a licensed professional known for her energy, warmth, and attention to detail.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-gold mb-2">Our Philosophy</h3>
              <p className="text-brown/80 leading-relaxed">She takes the time to listen, understand exactly what each client wants, and create a customized experience based on their individual goals.</p>
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-gold mb-2">The Experience</h3>
              <p className="text-brown/80 leading-relaxed">Sheerin Beauty is more than a salon, it is a welcoming, comfortable space that feels like home. Private appointments are also available for guests who prefer additional comfort and privacy.</p>
            </div>
            <div className="bg-gold/20 border-l-4 border-gold p-4 rounded">
              <p className="text-brown font-semibold italic text-lg">"To help every client feel cared for, confident, and naturally beautiful."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}