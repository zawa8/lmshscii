import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers'
import { inglishenglosoftw8asc } from '@/components/hsciifp/hsciifonts'

export const metadata: Metadata = {
  title: 'lms (learning management system)',
  description: 'lms (learning management system)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider dynamic afterSignOutUrl="/">
      <html lang="en">
        <body className={inglishenglosoftw8asc.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
