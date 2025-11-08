import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'A Jornada da Qualidade: Uma História dos Testes',
  description: 'Explore a fascinante jornada dos testes e qualidade, desde o Código de Hamurabi até os algoritmos de Inteligência Artificial.',
  keywords: 'qualidade, testes, QA, história, software testing, Hamurabi, Shewhart, Grace Hopper, Myers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
