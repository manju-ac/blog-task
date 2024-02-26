import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import GlobalStyle from './global.styled';
import StyledComponentsRegistry from '@/lib/styled-components/registry';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'This is a simple blog application.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <main>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
