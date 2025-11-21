"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

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

const ManageNews = () => {
    const router = useRouter();
    const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const categories = ['All', 'Politics', 'Sports', 'Entertainment', 'Technology', 'Business', 'Health', 'Education', 'Crime'];

    useEffect(() => {
        const isAuth = localStorage.getItem('adminAuth') || sessionStorage.getItem('adminAuth');
        if (!isAuth) {
            router.push('/login');
        }

        // Load news from localStorage
        const storedNews = JSON.parse(localStorage.getItem('newsArticles') || '[]');
        setNewsArticles(storedNews);
    }, [router]);

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this news article?')) {
            const updatedNews = newsArticles.filter(news => news.id !== id);
            setNewsArticles(updatedNews);
            localStorage.setItem('newsArticles', JSON.stringify(updatedNews));
        }
    };

    const filteredNews = newsArticles.filter(news => {
        const matchesSearch = news.heading.toLowerCase().includes(searchTerm.toLowerCase()) ||
            news.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === '' || filterCategory === 'All' || news.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admin/dashboard"
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <FaArrowLeft className="text-gray-600" />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-800">Manage News</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Filters */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Search</label>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search by heading or content..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Filter by Category</label>
                            <select
                                value={filterCategory}
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat === 'All' ? '' : cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* News List */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    {filteredNews.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No news articles found</p>
                            <Link
                                href="/admin/post-news"
                                className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Post Your First News
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Image
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Heading
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Date
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredNews.map((news) => (
                                        <tr key={news.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img
                                                    src={news.image || 'https://via.placeholder.com/100'}
                                                    alt={news.heading}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900 line-clamp-2">
                                                    {news.heading}
                                                </div>
                                                {news.subheading && (
                                                    <div className="text-sm text-gray-500 line-clamp-1">
                                                        {news.subheading}
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                                    {news.category}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {news.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <div className="flex gap-2">
                                                    <button
                                                        className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-50 rounded transition-colors"
                                                        title="View"
                                                    >
                                                        <FaEye />
                                                    </button>
                                                    <button
                                                        className="text-green-600 hover:text-green-900 p-2 hover:bg-green-50 rounded transition-colors"
                                                        title="Edit"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(news.id)}
                                                        className="text-red-600 hover:text-red-900 p-2 hover:bg-red-50 rounded transition-colors"
                                                        title="Delete"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ManageNews;
