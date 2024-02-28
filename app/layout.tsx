import type { Metadata } from 'next';
import { Inter, Urbanist } from 'next/font/google';

import { App, Container, Main } from './global.styled';
import './globals.css';
import StyledComponentsRegistry from '@/lib/styled-components/registry';
import Header from '../components/header';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer';

const font = Urbanist({ subsets: ['latin'] });

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
          <App>
            <Header />
            <Sidebar />
            <Container>
              <Main>{children}</Main>
            </Container>
            <Footer />
          </App>
        </body>
      </html>
    </StyledComponentsRegistry>
  );
}
