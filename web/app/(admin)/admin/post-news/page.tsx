"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft, FaImage, FaSave } from 'react-icons/fa';

const PostNews = () => {
    const router = useRouter();
    const [heading, setHeading] = useState('');
    const [subheading, setSubheading] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [district, setDistrict] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState('');

    const categories = [
        'मध्यप्रदेश',
        'देश',
        'दुनिया',
        'पॉलिटिक्स',
        'खेल',
        'मनोरंजन',
        'हेल्थ',
        'धर्म',
        'टेक्नोलॉजी'
    ];

    const mpDistricts = [
        'जबलपुर',
        'भोपाल',
        'इंदौर',
        'उज्जैन',
        'ग्वालियर',
        'अनूपपुर',
        'शहडोल',
        'उमरिया',
        'रायसेन',
        'राजगढ़',
        'सीहोर',
        'विदिशा',
        'मुरैना',
        'श्योपुर',
        'अशोकनगर',
        'शिवपुरी',
        'गुना',
        'बालाघाट',
        'छिंदवाड़ा',
        'कटनी',
        'मंडला',
        'नरसिंहपुर',
        'सिवनी',
        'डिंडोरी',
        'रीवा',
        'सतना',
        'सीधी',
        'सिंगरौली',
        'छतरपुर',
        'दमोह',
        'पन्ना',
        'सागर',
        'नर्मदापुरम',
        'देवास',
        'रतलाम'
    ];

    useEffect(() => {
        const isAuth = localStorage.getItem('adminAuth') || sessionStorage.getItem('adminAuth');
        if (!isAuth) {
            router.push('/login');
        }
    }, [router]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Get existing news from localStorage
        const existingNews = JSON.parse(localStorage.getItem('newsArticles') || '[]');

        // Determine final category (use district if MP is selected and district is chosen)
        const finalCategory = category === 'मध्यप्रदेश' && district ? district : category;

        // Create new news object
        const newNews = {
            id: Date.now().toString(),
            heading,
            subheading,
            content,
            category: finalCategory,
            image: imagePreview,
            date: new Date().toLocaleDateString('en-IN'),
            author: 'Admin'
        };

        // Add to array and save
        existingNews.push(newNews);
        localStorage.setItem('newsArticles', JSON.stringify(existingNews));

        // Reset form
        setHeading('');
        setSubheading('');
        setContent('');
        setCategory('');
        setDistrict('');
        setImage(null);
        setImagePreview('');

        alert('News posted successfully!');
        router.push('/admin/manage-news');
    };

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
                        <h1 className="text-2xl font-bold text-gray-800">Post News</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 space-y-6">
                    {/* Heading */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Heading <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={heading}
                            onChange={(e) => setHeading(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter news heading"
                            required
                        />
                    </div>

                    {/* Subheading */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Subheading <span className="text-gray-400 text-sm">(Optional)</span>
                        </label>
                        <input
                            type="text"
                            value={subheading}
                            onChange={(e) => setSubheading(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter subheading (optional)"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Content <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={8}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Enter news content"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Select Category <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value);
                                // Reset district when category changes
                                if (e.target.value !== 'मध्यप्रदेश') {
                                    setDistrict('');
                                }
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        >
                            <option value="">Choose a category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* District Dropdown - Only shown when Madhya Pradesh is selected */}
                    {category === 'मध्यप्रदेश' && (
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">
                                Select District <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            >
                                <option value="">Choose a district</option>
                                {mpDistricts.map((dist) => (
                                    <option key={dist} value={dist}>
                                        {dist}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Image Upload */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Add Photo <span className="text-red-500">*</span>
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                            {imagePreview ? (
                                <div className="space-y-4">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="max-h-64 mx-auto rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setImage(null);
                                            setImagePreview('');
                                        }}
                                        className="text-red-600 hover:text-red-700 font-medium"
                                    >
                                        Remove Image
                                    </button>
                                </div>
                            ) : (
                                <label className="cursor-pointer">
                                    <FaImage className="text-5xl text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-600 mb-2">Click to upload image</p>
                                    <p className="text-sm text-gray-400">PNG, JPG up to 10MB</p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        required
                                    />
                                </label>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            <FaSave />
                            Publish News
                        </button>
                        <Link
                            href="/admin/dashboard"
                            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default PostNews;
