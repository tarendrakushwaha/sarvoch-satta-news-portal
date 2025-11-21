"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaNewspaper, FaList, FaSignOutAlt, FaChartLine } from 'react-icons/fa';

const AdminDashboard = () => {
    const router = useRouter();

    useEffect(() => {
        // Check authentication
        const isAuth = localStorage.getItem('adminAuth') || sessionStorage.getItem('adminAuth');
        if (!isAuth) {
            router.push('/login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        sessionStorage.removeItem('adminAuth');
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Total News</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-full">
                                <FaNewspaper className="text-blue-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Published</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">0</p>
                            </div>
                            <div className="bg-green-100 p-3 rounded-full">
                                <FaChartLine className="text-green-600 text-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-500 text-sm font-medium">Categories</p>
                                <p className="text-3xl font-bold text-gray-800 mt-1">8</p>
                            </div>
                            <div className="bg-purple-100 p-3 rounded-full">
                                <FaList className="text-purple-600 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            href="/admin/post-news"
                            className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            <FaNewspaper className="text-3xl" />
                            <div>
                                <h3 className="text-lg font-bold">Post News</h3>
                                <p className="text-sm text-blue-100">Create a new news article</p>
                            </div>
                        </Link>

                        <Link
                            href="/admin/manage-news"
                            className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                        >
                            <FaList className="text-3xl" />
                            <div>
                                <h3 className="text-lg font-bold">Manage News</h3>
                                <p className="text-sm text-purple-100">Edit or delete existing news</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
