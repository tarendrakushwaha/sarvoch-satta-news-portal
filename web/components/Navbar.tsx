"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaChevronDown } from 'react-icons/fa';

const districtsList = [
    "जबलपुर", "भोपाल", "इंदौर", "उज्जैन", "ग्वालियर", "अनूपपुर", "शहडोल", "उमरिया",
    "रायसेन", "राजगढ़", "सीहोर", "विदिशा", "मुरैना", "श्योपुर", "अशोकनगर", "शिवपुरी",
    "गुना", "बालाघाट", "छिंदवाड़ा", "कटनी", "मंडला", "नरसिंहपुर", "सिवनी", "डिंडोरी",
    "रीवा", "सतना", "सीधी", "सिंगरौली", "छतरपुर", "दमोह", "पन्ना", "सागर",
    "नर्मदापुरम", "देवास", "रतलाम"
];

const categories = [
    "देश", "दुनिया", "पॉलिटिक्स", "खेल", "मनोरंजन", "हेल्थ", "धर्म", "टेक्नोलॉजी"
];

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [districtSearch, setDistrictSearch] = useState('');
    const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);

    const filteredDistricts = districtsList.filter(district =>
        district.includes(districtSearch)
    );

    return (
        <nav className="text-white relative shadow-lg" style={{ backgroundColor: 'var(--deep-red)' }}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-12">

                    {/* Left: Home Button & Navigation */}
                    <div className="flex items-center space-x-1 md:space-x-6">
                        {/* Home Button */}
                        <Link href="/" className="font-bold text-xl hover:text-gray-200 px-3 py-2 transition-colors">
                            सर्वोच्च सत्ता
                        </Link>

                        {/* MP Dropdown */}
                        <div
                            className="relative group z-50"
                            onMouseEnter={() => setIsDistrictDropdownOpen(true)}
                            onMouseLeave={() => setIsDistrictDropdownOpen(false)}
                        >
                            <button className="flex items-center space-x-1 hover:text-gray-200 px-3 py-2 font-medium text-lg transition-colors">
                                <span>मध्यप्रदेश</span>
                                <FaChevronDown size={12} />
                            </button>

                            {/* Dropdown Content */}
                            {isDistrictDropdownOpen && (
                                <div className="absolute left-0 top-full w-64 bg-white text-gray-800 shadow-xl rounded-b-md border-t-4 border-blue-800 overflow-hidden">
                                    <div className="p-2 bg-gray-100 border-b">
                                        <input
                                            type="text"
                                            placeholder="जिला खोजें..."
                                            className="w-full px-3 py-1.5 text-base border rounded focus:outline-none focus:border-blue-700"
                                            value={districtSearch}
                                            onChange={(e) => setDistrictSearch(e.target.value)}
                                        />
                                    </div>
                                    <div className="max-h-80 overflow-y-auto">
                                        {filteredDistricts.length > 0 ? (
                                            filteredDistricts.map((district, index) => (
                                                <Link
                                                    key={index}
                                                    href={`/mp/${district}`}
                                                    className="block px-4 py-2 text-base hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100 last:border-0"
                                                >
                                                    {district}
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="px-4 py-2 text-sm text-gray-500">कोई परिणाम नहीं</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Categories */}
                        <div className="hidden md:flex items-center space-x-1">
                            {categories.map((cat, index) => (
                                <Link
                                    key={index}
                                    href={`/category/${cat}`}
                                    className="px-3 py-2 text-lg font-medium hover:text-gray-200 hover:bg-blue-900/20 rounded transition-colors"
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right: Search Icon */}
                    <div className="relative">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:bg-blue-900/30 rounded-full transition-colors focus:outline-none"
                        >
                            <FaSearch size={18} />
                        </button>

                        {/* Main Search Bar Overlay */}
                        {isSearchOpen && (
                            <div className="absolute right-0 top-full mt-2 w-72 bg-white p-2 rounded shadow-xl z-50 flex items-center border border-gray-200">
                                <input
                                    type="text"
                                    placeholder="खबर खोजें..."
                                    className="flex-1 px-3 py-2 text-gray-800 focus:outline-none"
                                    autoFocus
                                />
                                <button className="p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
                                    <FaSearch size={14} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Categories (Horizontal Scroll) */}
                <div className="md:hidden flex overflow-x-auto pb-2 space-x-4 scrollbar-hide">
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href={`/category/${cat}`}
                            className="whitespace-nowrap text-sm font-medium px-2"
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
