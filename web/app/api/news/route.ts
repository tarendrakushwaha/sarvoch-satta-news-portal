import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';

export async function GET() {
    try {
        await dbConnect();
        // Sort by createdAt descending (newest first)
        const news = await News.find({}).sort({ createdAt: -1 });

        // Map _id to id for frontend compatibility
        const formattedNews = news.map(doc => ({
            ...doc.toObject(),
            id: doc._id.toString(),
        }));

        return NextResponse.json({ success: true, data: formattedNews });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch news' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();

        const news = await News.create(body);

        return NextResponse.json({ success: true, data: news }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to create news' }, { status: 400 });
    }
}
