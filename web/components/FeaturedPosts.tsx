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

interface FeaturedPostsProps {
    news: NewsArticle[];
}

const FeaturedPosts = ({ news }: FeaturedPostsProps) => {
    // Use passed news if available, otherwise fallback to empty or handle gracefully
    // Note: The parent passes news.slice(0, 4), so we expect up to 4 items.

    const displayPosts = news.length > 0 ? news : [];

    if (displayPosts.length === 0) {
        return null; // Or return a skeleton/placeholder
    }

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
                {displayPosts.map((post, index) => (
                    <div key={index} className="flex gap-4 group cursor-pointer bg-white p-2 rounded-lg hover:shadow-md transition-shadow border border-gray-100">
                        <div className="w-1/3 h-24 md:h-32 overflow-hidden rounded-md relative">
                            <img
                                src={post.image}
                                alt={post.heading}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="text-[10px] font-bold text-[#c00000] uppercase mb-1">{post.category}</span>
                            <h3 className="text-base md:text-lg font-bold text-gray-800 leading-snug group-hover:text-[#c00000] transition-colors line-clamp-2 mb-2">
                                {post.heading}
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
