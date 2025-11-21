import React from 'react';
import Link from 'next/link';

const MissedNews = () => {
    const newsItems = [
        {
            image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1988&auto=format&fit=crop",
            category: "HEALTH",
            title: "सर्दियों में इन 5 चीजों का सेवन रखेगा आपको बीमारियों से दूर",
            author: "Dr. Sharma",
            date: "Oct 23, 2025"
        },
        {
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
            category: "BUSINESS",
            title: "सोने के भाव में भारी गिरावट, खरीदारी का सही मौका",
            author: "Market Desk",
            date: "Oct 23, 2025"
        },
        {
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
            category: "EDUCATION",
            title: "CBSE ने जारी किया 10वीं और 12वीं का टाइम टेबल",
            author: "Education Desk",
            date: "Oct 23, 2025"
        },
        {
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            category: "LIFESTYLE",
            title: "दिवाली पर घर को सजाने के ये आसान और सस्ते तरीके",
            author: "Lifestyle Team",
            date: "Oct 23, 2025"
        }
    ];

    return (
        <section className="container mx-auto px-4 py-8 bg-gray-50">
            <div className="flex items-center justify-between mb-6 border-b-2 border-gray-200 pb-2">
                <h2 className="text-2xl font-bold text-gray-800 relative">
                    <span className="relative z-10 bg-gray-50 pr-4">शायद आप चूक गए</span>
                    <span className="absolute bottom-[-2px] left-0 w-20 h-[2px] bg-[#c00000]"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="h-40 overflow-hidden relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-2 left-2 bg-[#c00000] text-white text-[10px] font-bold px-2 py-1 rounded">
                                {item.category}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#c00000] transition-colors">
                                {item.title}
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
