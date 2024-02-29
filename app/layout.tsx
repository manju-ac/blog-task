import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';
import StyledComponentsRegistry from '@/lib/styled-components/registry';
import Header from '../components/header';
import { App, Container, Main } from './global.styled';
import './globals.css';

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
