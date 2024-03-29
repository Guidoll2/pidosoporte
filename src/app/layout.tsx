import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '400' , '700' ,]
})

export const metadata: Metadata = {
  title: 'pidosoporte',
  description: 'Soporte IT / Networking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="pidosoporte" content="Soporte técnico IT" />
        <meta name="keywords" content="Redes servidores soporte it" />
        <meta name="author" content="Guido Llaurado" />

      </head>
      <body className={`${inter.className}  ${montserrat.className}`}>{children}</body>
    </html>
  )
}
