import './globals.css'

export const metadata = {
  title: 'Sheerin Beauty | Hair, Laser & Skincare',
  description: 'Enhancing your natural beauty with personalized care',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-brown">{children}</body>
    </html>
  )
}
