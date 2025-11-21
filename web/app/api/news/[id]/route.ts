import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import News from '@/models/News';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;

        const newsItem = await News.findById(id);

        if (!newsItem) {
            return NextResponse.json({ success: false, error: 'News not found' }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            data: { ...newsItem.toObject(), id: newsItem._id.toString() }
        });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch news item' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;

        const deletedNews = await News.findByIdAndDelete(id);

        if (!deletedNews) {
            return NextResponse.json({ success: false, error: 'News not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete news' }, { status: 500 });
    }
}
