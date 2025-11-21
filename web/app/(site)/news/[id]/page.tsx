"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
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

export default function NewsDetailPage() {
    const params = useParams();
    const [article, setArticle] = useState<NewsArticle | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            // In a real app, you would fetch from an API
            // For now, we'll try to find it in localStorage
            const storedNews = JSON.parse(localStorage.getItem('newsArticles') || '[]');
            const foundArticle = storedNews.find((item: NewsArticle) => item.id === params.id);

            // If not found in localStorage (e.g. direct link), we might need a fallback or API call
            // For this demo, we'll just set what we found
            setArticle(foundArticle || null);
            setLoading(false);
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-12 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c00000]"></div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">News not found</h1>
                <p className="text-gray-600 mb-6">The news article you are looking for does not exist or has been removed.</p>
                <Link href="/" className="inline-block bg-[#c00000] text-white px-6 py-2 rounded hover:bg-red-700 transition-colors">
                    Back to Home
                </Link>
            </div>
        );
    }

    return (
        <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
                <Link href="/" className="hover:text-[#c00000]">Home</Link>
                <span className="mx-2">/</span>
                <span className="uppercase text-[#c00000] font-bold">{article.category}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {article.heading}
            </h1>

            {/* Subheading */}
            {article.subheading && (
                <h2 className="text-xl text-gray-600 mb-6 font-medium">
                    {article.subheading}
                </h2>
            )}

            {/* Author and Date */}
            <div className="flex items-center text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6">
                <span className="font-bold text-gray-800 mr-2">{article.author || 'Sarvoch Satta Desk'}</span>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
            </div>

            {/* Main Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
                <img
                    src={article.image}
                    alt={article.heading}
                    className="w-full h-auto object-cover max-h-[500px]"
                />
                <p className="text-xs text-gray-400 mt-2 italic px-1">Image for representation</p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                {article.content.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4">
                        {paragraph}
                    </p>
                ))}
            </div>

            {/* Share / Tags (Optional placeholder) */}
            <div className="mt-12 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Share this story</h3>
                <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Facebook</button>
                    <button className="bg-sky-500 text-white px-4 py-2 rounded text-sm hover:bg-sky-600">Twitter</button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">WhatsApp</button>
                </div>
            </div>
        </article>
    );
}
