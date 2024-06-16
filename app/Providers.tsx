'use client';
import { ThemeProvider } from 'next-themes';

const Providers = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <ThemeProvider enableSystem={true} attribute="class">{children}</ ThemeProvider>
}

export default Providers;