import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Container, Main } from './global.styled';
import './globals.css';
import StyledComponentsRegistry from '@/lib/styled-components/registry';
import Header from '../components/header';

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
    <StyledComponentsRegistry>
      <html lang='en'>
        <body className={font.className}>
          <Container>
            <Header />
            <Main>{children}</Main>
          </Container>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
