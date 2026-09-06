'use client'

const services = [
  {id: 1, category: 'Hair Services', title: 'Haircut & Style', items: [{name: "Woman's Haircut", price: '$78-$98'}, {name: "Men's Haircut", price: '$50'}, {name: 'Shampoo Set', price: '$85'}, {name: 'Shampoo & BlowDryer (style)', price: '$85'}, {name: 'Curl/Flat Iron', price: 'Consultation Required'}]},
  {id: 2, category: 'Hair Services', title: 'Color Services', items: [{name: 'Root Touch up', price: '$100'}, {name: 'Toner Add-on', price: '$65'}, {name: 'All color services', price: 'Consultation'}]},
  {id: 3, category: 'Hair Services', title: 'Smoothing Treatment', items: [{name: 'Conditioning Treatment', price: '$65'}, {name: 'Olaplex Treatment Add-on', price: '$65'}, {name: 'Smoothing treatments', price: 'Consultation'}]},
  {id: 4, category: 'Hair Services', title: 'Perm', items: [{name: 'Short hair', price: '$200'}, {name: 'Deep Conditioning Add-on', price: '$40'}, {name: 'Lash Lift', price: '$150'}, {name: 'Eyebrows Lamination', price: '$75'}, {name: 'Long hair', price: 'Consultation'}]},
  {id: 5, category: 'Other Services', title: 'Party Packages', items: [{name: 'Lash Strips', price: '$35'}, {name: 'Eyebrows Tatto', price: '$400'}, {name: 'Party services', price: 'Consultation'}]},
  {id: 6, category: 'Other Services', title: 'Threading', items: [{name: 'Full Face & Eyebrows', price: '$68'}, {name: 'Eyebrows', price: '$30'}, {name: 'Lip', price: '$13'}, {name: 'Chin', price: '$13'}, {name: 'Tint Eyebrows', price: '$30'}, {name: 'Tint Lashes', price: '$50'}]},
  {id: 7, category: 'Waxing', title: 'Waxing Services', items: [{name: 'Eyebrows', price: '$30'}, {name: 'Lip', price: '$15'}, {name: 'Full Face', price: '$75'}, {name: 'Half Arm', price: '$50'}, {name: 'Full Arm', price: '$80'}, {name: 'Under Arm', price: '$40'}, {name: 'Half Leg', price: '$59'}, {name: 'Full Leg', price: '$98'}]}
]

export default function Services() {
  const hairServices = services.filter(s => s.category === 'Hair Services')
  const otherServices = services.filter(s => s.category === 'Other Services')
  const waxingServices = services.filter(s => s.category === 'Waxing')

  const renderServiceGroup = (serviceGroup, groupTitle) => (
    <div key={groupTitle} className="mb-16">
      <h3 className="text-4xl font-serif font-bold text-brown mb-12 text-center border-b-2 border-gold pb-4">{groupTitle}</h3>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {serviceGroup.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all">
            <h4 className="text-2xl font-serif font-bold text-gold mb-6 pb-3 border-b-2 border-gold/30">{service.title}</h4>
            <div className="space-y-3">
              {service.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <span className="text-brown/80 font-medium text-sm md:text-base">{item.name}</span>
                  <span className="text-gold font-bold text-sm md:text-base whitespace-nowrap ml-2">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id="services" className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-brown mb-6">Our Services</h2>
          <div className="h-1 w-32 bg-gold mx-auto rounded-full"></div>
          <p className="text-brown/70 mt-4 text-lg">Enhancing your natural beauty with personalized care</p>
        </div>
        {renderServiceGroup(hairServices, 'Hair Salon Services')}
        {renderServiceGroup(otherServices, 'Other Services')}
        {renderServiceGroup(waxingServices, 'Waxing Services')}
      </div>
    </section>
  )
}