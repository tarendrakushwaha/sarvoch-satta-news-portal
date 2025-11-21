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

interface HeroProps {
    news?: NewsArticle;
}

const Hero: React.FC<HeroProps> = ({ news }) => {
    // Default news if no admin news available
    const defaultNews = {
        heading: "देश को चार 'वंदे भारत' की सौगात… पीएम मोदी ने काशी से दिखाई हरी झंडी",
        subheading: "Prime Minister flags off four new Vande Bharat trains from Varanasi",
        content: "Prime Minister Narendra Modi flagged off four new Vande Bharat trains from Varanasi, marking a significant boost to India's rail infrastructure and connectivity.",
        category: "Politics",
        image: "https://images.unsplash.com/photo-1529101091760-61df6be5d18b?q=80&w=2070&auto=format&fit=crop",
        date: "Nov 21, 2025"
    };

    const mainNews = news || defaultNews;

    return (
        <section className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main News - Left (2 columns) */}
                <div className="lg:col-span-2">
                    <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
                        <img
                            src={mainNews.image}
                            alt={mainNews.heading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <span className="inline-block px-3 py-1 bg-[#c00000] text-xs font-bold uppercase mb-3 rounded">
                                {mainNews.category}
                            </span>
                            <h2 className="text-3xl font-bold mb-2 leading-tight group-hover:text-red-400 transition-colors">
                                {mainNews.heading}
                            </h2>
                            {mainNews.subheading && (
                                <p className="text-gray-300 text-sm mb-2">{mainNews.subheading}</p>
                            )}
                            <p className="text-gray-400 text-xs">{mainNews.date}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar - Right (1 column) */}
                <div className="space-y-4">
                    {/* Editor's Picks */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b-2 border-[#c00000]">
                            संपादक की पसंद
                        </h3>
                        <div className="space-y-3">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex gap-3 pb-3 border-b border-gray-100 last:border-0 cursor-pointer group">
                                    <div className="w-20 h-16 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                                        <img
                                            src={`https://images.unsplash.com/photo-${1540910419868 + item}?q=80&w=200&auto=format&fit=crop`}
                                            alt="Editor's pick"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#c00000] transition-colors">
                                            महत्वपूर्ण खबर का शीर्षक यहाँ दिखाई देगा
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ad/Trending Widget */}
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center">
                        <h4 className="text-lg font-bold mb-2">Trending Now</h4>
                        <p className="text-sm opacity-90">Most viewed stories today</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
