import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Kevin Hoang</title>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>{children}</body>
    </html>
  )
}