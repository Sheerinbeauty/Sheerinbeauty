'use client'

export default function Footer() {
  return (
    <footer className="bg-darkBrown text-cream py-12 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Beauty <span className="text-cream">Sheerin</span></h3>
            <p className="text-cream/80">Enhancing your natural beauty with personalized care for over 25 years.</p>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li><a href="#home" className="hover:text-gold transition">Home</a></li>
              <li><a href="#services" className="hover:text-gold transition">Services</a></li>
              <li><a href="#about" className="hover:text-gold transition">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-cream/80 text-sm">
              <li>Hair Services</li>
              <li>Laser Treatments</li>
              <li>Skincare</li>
              <li>Private Appointments</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/30 pt-8 text-center text-cream/70 text-sm">
          <p>&copy; 2024 Sheerin Beauty. All rights reserved.</p>
          <p className="mt-2">Designed with elegance and care</p>
        </div>
      </div>
    </footer>
  )
}