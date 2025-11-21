import React from 'react';
import Link from 'next/link';

const FeaturedPosts = () => {
    const posts = [
        {
            category: "POLITICS",
            title: "चुनाव आयोग की नई घोषणा: अब घर बैठे कर सकेंगे मतदान",
            image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?q=80&w=2071&auto=format&fit=crop",
            date: "Oct 24, 2025"
        },
        {
            category: "TECHNOLOGY",
            title: "भारत में लॉन्च हुआ दुनिया का सबसे सस्ता 5G स्मार्टफोन",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
            date: "Oct 24, 2025"
        },
        {
            category: "SPORTS",
            title: "विराट कोहली ने तोड़ा सचिन तेंदुलकर का एक और रिकॉर्ड",
            image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?q=80&w=2070&auto=format&fit=crop",
            date: "Oct 24, 2025"
        },
        {
            category: "ENTERTAINMENT",
            title: "बॉलीवुड की इस फिल्म ने पहले ही दिन की 100 करोड़ की कमाई",
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
            date: "Oct 24, 2025"
        }
    ];

    return (
        <section className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6 border-b-2 border-gray-100 pb-2">
                <h2 className="text-2xl font-bold text-gray-800 relative">
                    <span className="relative z-10 bg-white pr-4">फीचर्ड पोस्ट</span>
                    <span className="absolute bottom-[-2px] left-0 w-20 h-[2px] bg-[#c00000]"></span>
                </h2>
                <Link href="/featured" className="text-sm text-[#c00000] font-semibold hover:underline">
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post, index) => (
                    <div key={index} className="flex gap-4 group cursor-pointer bg-white p-2 rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-1/3 h-24 md:h-32 overflow-hidden rounded-md relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="text-[10px] font-bold text-[#c00000] uppercase mb-1">{post.category}</span>
                            <h3 className="text-base md:text-lg font-bold text-gray-800 leading-snug group-hover:text-[#c00000] transition-colors line-clamp-2 mb-2">
                                {post.title}
                            </h3>
                            <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedPosts;
