import { ThemeSwitcher } from '@/components/theme-switcher';
import { ThemeProvider } from 'next-themes';
import { Geist } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Our Homepage',
};

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={geistSans.className} suppressHydrationWarning>
      <body className='bg-background text-foreground'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='min-h-screen flex flex-col items-center'>
            <div className='flex-1 w-full flex flex-col gap-20 items-center'>
              <nav className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
                <div className='w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm'>
                  <div className='flex gap-5 items-center font-semibold'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/sign-in'}>Sign In</Link>
                    <Link href={'/sign-up'}>Sign Up</Link>
                    <ThemeSwitcher />
                    <div className='flex items-center gap-2'></div>
                  </div>
                </div>
              </nav>
              <div className='flex flex-col gap-20 max-w-5xl p-5'>
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
