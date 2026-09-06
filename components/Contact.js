'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-brown mb-4 text-center">Get in Touch</h2>
        <div className="h-1 w-20 bg-gold mx-auto rounded-full mb-12"></div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4"><div className="flex-shrink-0"><MapPin className="w-8 h-8 text-gold" /></div><div><h3 className="text-lg font-serif font-bold text-brown mb-1">Location</h3><p className="text-brown/70">123 Beauty Lane<br />Your City, State 12345</p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0"><Phone className="w-8 h-8 text-gold" /></div><div><h3 className="text-lg font-serif font-bold text-brown mb-1">Phone</h3><p className="text-brown/70"><a href="tel:+1234567890" className="hover:text-gold transition">(123) 456-7890</a></p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0"><Mail className="w-8 h-8 text-gold" /></div><div><h3 className="text-lg font-serif font-bold text-brown mb-1">Email</h3><p className="text-brown/70"><a href="mailto:sheerin@beauty.com" className="hover:text-gold transition">sheerin@beauty.com</a></p></div></div>
            <div className="flex gap-4"><div className="flex-shrink-0"><Clock className="w-8 h-8 text-gold" /></div><div><h3 className="text-lg font-serif font-bold text-brown mb-1">Hours</h3><p className="text-brown/70">Monday - Friday: 10am - 6pm<br />Saturday: 10am - 5pm<br />Sunday: By appointment</p></div></div>
          </div>
          <form className="space-y-4">
            <div><label className="block text-brown font-semibold mb-2">Name</label><input type="text" placeholder="Your name" className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-gold transition" /></div>
            <div><label className="block text-brown font-semibold mb-2">Email</label><input type="email" placeholder="Your email" className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-gold transition" /></div>
            <div><label className="block text-brown font-semibold mb-2">Phone</label><input type="tel" placeholder="Your phone" className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-gold transition" /></div>
            <div><label className="block text-brown font-semibold mb-2">Message</label><textarea rows="4" placeholder="Tell us about your inquiry..." className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg focus:outline-none focus:border-gold transition"></textarea></div>
            <button type="submit" className="btn-gold w-full">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}