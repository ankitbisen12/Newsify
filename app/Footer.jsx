import React from 'react';
import { NewspaperIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

const Footer = () => {
    return (
        <section className="bg-gray-100 dark:bg-zinc-900 text-center px-6 md:px-12">
            <div className="max-w-4xl mx-auto mb-4 mt-10">
                <h3 className="text-xl md:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-6">
                    Stay informed with the latest and most reliable news, where every headline brings you closer to the truth
                </h3>
            </div>
            <button className="bg-nav-100 text-white text-lg font-medium py-5 px-14 md:px-20 rounded-full transition-all duration-300 hover:bg-blue-700">
                <Link href='/'>Subscribe Now</Link>
            </button>
            <footer className="py-10 px-6 md:px-12">
                <NewspaperIcon className='w-16 h-16 text-gray-800 dark:text-gray-100 mx-auto' />
                <p className="text-gray-800 dark:text-white font-semibold text-center text-lg">
                    &copy; Copyright by
                    <Link
                        className="ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/ankit-bisen-13a55a1a7/"
                    >
                        Ankit Bisen
                    </Link>
                </p>
            </footer>
        </section>
    );
};

export default Footer;
