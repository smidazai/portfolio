import { Html, Head, Main, NextScript } from 'next/document'
import clsx from 'clsx';
import type { Metadata } from 'next';
import Sidebar from '../components/sidebar';

export default function Document() {
    return (
        <Html className="text-black bg-white dark:text-white dark:bg-[#111010]">
            <Head />
            <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
                <Sidebar />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
