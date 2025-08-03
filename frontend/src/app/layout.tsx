import './globals.css';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/authContext';

export const metadata = {
   title : "Mini Linkedin",
   description : "Community platform"
}

export default function RootLayout( {children} : {children : ReactNode} ){
  return (
    <html lang='en' >
      <body className='bg-grey-100 text-grey-900'>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}