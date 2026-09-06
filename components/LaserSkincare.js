'use client'

const laserSkincare = [
  {id: 1, title: 'Female Laser Hair Removal', services: [{name: 'Full Face', price: '$249/Treatment'}, {name: 'Chin & Lip', price: '$199/Treatment'}, {name: 'Full Arms', price: '$249/Treatment'}, {name: 'Full Leg', price: '$299/Treatment'}, {name: 'Brazilian', price: '$249/Treatment'}, {name: 'Full Back', price: '$250/Treatment'}]},
  {id: 2, title: 'Male Laser Hair Removal', services: [{name: 'Bread Area', price: '$195/Treatment'}, {name: 'Full Arms', price: '$299/Treatment'}, {name: 'Full Legs', price: '$329/Treatment'}, {name: 'Full Back', price: '$299/Treatment'}, {name: 'Chest', price: '$175/Treatment'}]},
  {id: 3, title: 'Biomicroneedling', services: [{name: 'Full Face', price: '$295/Treatment'}, {name: 'Full Face & Neck', price: '$349/Treatment'}, {name: 'Chest', price: '$295/Treatment'}, {name: 'Full Back', price: '$395/Treatment'}]},
  {id: 4, title: 'HydroFacial', services: [{name: 'Full Face', price: '$149/Treatment'}, {name: 'Full Face with Dermaplan', price: '$195/Treatment'}, {name: 'Full Face & Neck', price: '$195/Treatment'}, {name: 'Full Face & Neck with Dermaplan', price: '$249/Treatment'}]},
  {id: 5, title: 'Advanced Microdermabrasion', services: [{name: 'Full Face', price: '$130/Treatment'}, {name: 'Full Face & Neck', price: '$160/Treatment'}, {name: 'Chest', price: '$130/Treatment'}, {name: 'Full Back', price: '$180/Treatment'}]},
  {id: 6, title: 'Dermaplanning', services: [{name: 'Full Face', price: '$99/Treatment'}, {name: 'Full Face with Facial', price: '$199/Treatment'}, {name: 'Full Face & Neck', price: '$120/Treatment'}, {name: 'Full Face & Neck with Facial', price: '$249/Treatment'}]}
]

export default function LaserSkincare() {
  return (
    <section id="laser-skincare" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brown mb-4">Laser & Skincare Services</h2>
          <p className="text-xl text-brown/70 font-serif italic">Dedication. Expertise. Passion.</p>
          <div className="h-1 w-32 bg-gold mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {laserSkincare.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-serif font-bold text-gold mb-4">{service.title}</h3>
              <div className="space-y-2">
                {service.services.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <span className="text-brown/80 text-sm">{item.name}</span>
                    <span className="text-gold font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}