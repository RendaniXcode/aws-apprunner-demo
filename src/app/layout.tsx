import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AWS App Runner Demo',
  description: 'Showcasing South African AgriTech Startups with AWS App Runner',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  )
}
