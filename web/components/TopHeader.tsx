"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const TopHeader = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            // Date Format: Friday, November 21, 2025
            const dateOptions: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };

            // Time Format: 11:48:20 AM
            const timeOptions: Intl.DateTimeFormatOptions = {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            };

            setCurrentDate(now.toLocaleDateString('en-US', dateOptions));
            setCurrentTime(now.toLocaleTimeString('en-US', timeOptions));
        };

        updateDateTime();
        const timer = setInterval(updateDateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-2 relative flex justify-between items-center h-24">
                {/* Left: Date and Time */}
                <div className="text-sm text-gray-600 font-medium z-10 flex flex-col">
                    <span>{currentDate}</span>
                    <span className="text-xs text-gray-500 mt-0.5">{currentTime}</span>
                </div>

                {/* Center: Logo (Absolutely Centered) */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/assets/logo.jpg"
                        alt="Sarvoch Satta Logo"
                        width={300}
                        height={80}
                        className="h-20 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Right: Social Icons */}
                <div className="flex space-x-4 z-10">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-black transition-colors">
                        <FaXTwitter size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
