import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Glucose Verified',
  description: 'Diabetes management and glucose tracking',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
