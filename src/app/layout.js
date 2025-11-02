import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Jo Saji - Personal Portfolio',
  description: 'A modern and responsive personal portfolio showcasing projects, skills, and experience.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio', 'Full-Stack', 'AI'],
  author: 'Jo Saji',
  openGraph: {
    title: 'Jo Saji - Personal Portfolio',
    description: 'A modern and responsive personal portfolio showcasing projects, skills, and experience.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Jo Saji Portfolio',
    images: [
      {
        url: 'https://your-portfolio-url.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jo Saji Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jo Saji - Personal Portfolio',
    description: 'A modern and responsive personal portfolio showcasing projects, skills, and experience.',
    creator: '@yourtwitterhandle',
    images: ['https://your-portfolio-url.com/twitter-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

