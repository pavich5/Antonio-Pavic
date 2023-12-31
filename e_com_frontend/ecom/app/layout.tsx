import { ClerkProvider } from '@clerk/nextjs'
import Header from './components/header/Header'
 
export const metadata = {
  title: 'Coffee Store',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <ClerkProvider publishableKey='pk_test_YmlnLWJhcm5hY2xlLTMxLmNsZXJrLmFjY291bnRzLmRldiQ'>
      <html lang="en">
        <body>
          <Header/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}