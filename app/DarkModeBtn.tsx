'use client';
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/16/solid';

const DarkModeBtn = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return <div>
        {currentTheme === 'dark' ? (
            <SunIcon className='h-8 w-8 cursor-pointer text-amber-400' onClick={() => setTheme('light')} />
        ) :
            (
                <MoonIcon className='h-8 w-8 cursor-pointer text-gray-800' onClick={() => setTheme('dark')} />
            )
        }
    </div>
}

export default DarkModeBtn;