import './globals.css';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/authContext';
import Navbar from '@/components/Navbar';

export const metadata = {
   title : "Mini Linkedin",
   description : "Community platform"
}

export default function RootLayout( {children} : {children : ReactNode} ){
  return (
    <html lang='en' >
      <body className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
        <AuthProvider>
          <Navbar />
          <main className='container mx-auto px-4 py-8'>
            <div className='max-w-6xl mx-auto'>
              {children}
            </div>
          </main>
          <footer className='bg-white border-t border-gray-200 mt-16'>
            <div className='container mx-auto px-4 py-6 text-center text-gray-600'>
              <p>&copy; 2025 Mini LinkedIn. All rights reserved.</p>
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  )
}