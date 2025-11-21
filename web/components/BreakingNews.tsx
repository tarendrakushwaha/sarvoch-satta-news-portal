"use client";

import React from 'react';
import Link from 'next/link';

interface NewsArticle {
    id: string;
    heading: string;
    subheading: string;
    content: string;
    category: string;
    image: string;
    date: string;
    author: string;
}

interface BreakingNewsProps {
    news: NewsArticle[];
}

const BreakingNews: React.FC<BreakingNewsProps> = ({ news }) => {
    // Default news if no admin news available
    const defaultNews = [
        {
            id: '1',
            heading: "देश को चार 'वंदे भारत' की सौगात… पीएम मोदी ने काशी से दिखाई हरी झंडी",
            image: "https://images.unsplash.com/photo-1529101091760-61df6be5d18b?q=80&w=100&auto=format&fit=crop",
            category: "Politics"
        },
        {
            id: '2',
            heading: "अनुसूचित जाति-जनजाति वर्ग के विकास और कल्याण के लिए राज्य सरकार कर रही है निरंतर कार्य",
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=100&auto=format&fit=crop",
            category: "State"
        }
    ];

    const newsItems = news && news.length > 0 ? news : defaultNews;

    return (
        <div className="bg-white border-b border-gray-200 shadow-sm">
            <div className="container mx-auto flex items-center h-12">
                {/* Label Section */}
                <div className="flex h-full z-20 shadow-md">
                    {/* Icon Part (Dark Red) */}
                    <div className="bg-[#8B0000] w-12 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                        </div>
                    </div>
                    {/* Text Part (Bright Red) */}
                    <div className="bg-[#c00000] px-4 flex items-center text-white font-bold text-sm uppercase tracking-wide">
                        Breaking News
                    </div>
                </div>

                {/* Ticker Section */}
                <div className="flex-1 overflow-hidden relative h-full bg-gray-50">
                    <div className="absolute top-0 left-0 w-full h-full flex items-center animate-marquee whitespace-nowrap">
                        {newsItems.map((item, index) => (
                            <div key={index} className="flex items-center mx-8 group cursor-pointer">
                                <img
                                    src={item.image || "https://via.placeholder.com/100"}
                                    alt="News"
                                    className="w-8 h-8 object-cover rounded-sm mr-3 border border-gray-300"
                                />
                                <span className="text-sm font-bold text-gray-800 group-hover:text-[#c00000] transition-colors">
                                    {item.heading}
                                </span>
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {newsItems.map((item, index) => (
                            <div key={`dup-${index}`} className="flex items-center mx-8 group cursor-pointer">
                                <img
                                    src={item.image || "https://via.placeholder.com/100"}
                                    alt="News"
                                    className="w-8 h-8 object-cover rounded-sm mr-3 border border-gray-300"
                                />
                                <span className="text-sm font-bold text-gray-800 group-hover:text-[#c00000] transition-colors">
                                    {item.heading}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
