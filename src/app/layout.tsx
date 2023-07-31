import { ReactNode } from 'react'
import Head from './header'

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <h1>Teste</h1>
        {children}
      </body>
    </html>
  )
}
