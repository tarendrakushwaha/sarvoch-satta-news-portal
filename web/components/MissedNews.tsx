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

interface MissedNewsProps {
    news: NewsArticle[];
}

const MissedNews = ({ news }: MissedNewsProps) => {
    const displayNews = news.length > 0 ? news : [];

    if (displayNews.length === 0) {
        return null;
    }

    return (
        <section className="container mx-auto px-4 py-8 bg-gray-50">
            <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
                <h2 className="text-2xl font-bold text-gray-800 relative">
                    <span className="relative z-10 bg-gray-50 pr-4">शायद आप चूक गए</span>
                    <span className="absolute bottom-[-2px] left-0 w-20 h-[2px] bg-[#c00000]"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {displayNews.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="h-40 overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.heading}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-2 left-2 bg-[#c00000] text-white text-[10px] font-bold px-2 py-1 rounded">
                                {item.category}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#c00000] transition-colors">
                                {item.heading}
                            </h3>
                            <div className="flex items-center justify-between text-xs text-gray-400 mt-3">
                                <span>{item.author}</span>
                                <span>{item.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MissedNews;
