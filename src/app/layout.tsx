import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vulcão Tintas - Automotiva e Imobiliária',
  description: 'Seja bem-vindo à Vulcão Tintas, sua loja completa para todas as suas necessidades de tintas e materiais de construção. Oferecemos uma ampla variedade de tintas de alta qualidade para projetos imobiliários e automotivos, garantindo resultados duradouros e profissionais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
