import React from 'react';
import { useColorMode } from '@chakra-ui/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { colorMode } = useColorMode();

  return (
    <html lang='en' className={colorMode === 'dark' ? 'dark' : ''}>
      <body>{children}</body>
    </html>
  );
}
