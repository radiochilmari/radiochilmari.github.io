export const metadata = {
  title: 'Welcome Readio 99.20 fm',
  description: 'Readio 99.0',
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
