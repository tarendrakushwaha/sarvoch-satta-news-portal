"use client";

import { useEffect, useState } from 'react';
import Hero from "@/components/Hero";
import BreakingNews from "@/components/BreakingNews";
import FeaturedPosts from "@/components/FeaturedPosts";
import MissedNews from "@/components/MissedNews";

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

export default function Home() {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    // Load news from localStorage
    const storedNews = JSON.parse(localStorage.getItem('newsArticles') || '[]');
    setNewsArticles(storedNews);
  }, []);

  return (
    <main className="min-h-screen bg-white text-foreground selection:bg-red-500/30">
      <BreakingNews news={newsArticles.slice(0, 5)} />
      <Hero news={newsArticles[0]} />
      <FeaturedPosts news={newsArticles.slice(0, 4)} />
      <MissedNews news={newsArticles.slice(4, 8)} />







      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="text-2xl font-bold text-white tracking-wide">SARVOCH <span className="text-red-500">SATTA</span></span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12 text-left">
            <div>
              <h4 className="text-white font-bold mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500">Pradesh</a></li>
                <li><a href="#" className="hover:text-red-500">Desh</a></li>
                <li><a href="#" className="hover:text-red-500">Videsh</a></li>
                <li><a href="#" className="hover:text-red-500">Sports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500">About Us</a></li>
                <li><a href="#" className="hover:text-red-500">Contact</a></li>
                <li><a href="#" className="hover:text-red-500">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {/* Social Icons */}
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">X</div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">fb</div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 transition-colors cursor-pointer">in</div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-gray-600 text-xs border-t border-white/5 pt-8">
            &copy; 2025 Sarvoch Satta. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
