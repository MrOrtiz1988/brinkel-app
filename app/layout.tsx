import './globals.css';

export const metadata = {
  title: 'Brinkel',
  description: 'Showcase and discover remarcable developer projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        Navbar
        <main>
          {children}
        </main>
        Footer
      </body>
    </html>
  )
}
