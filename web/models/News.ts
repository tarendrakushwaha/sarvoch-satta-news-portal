import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INews extends Document {
    heading: string;
    subheading?: string;
    content: string;
    category: string;
    image: string;
    author: string;
    date: string; // We'll keep it as string for simplicity to match current format, or use Date
    createdAt: Date;
}

const NewsSchema: Schema = new Schema({
    heading: { type: String, required: true },
    subheading: { type: String },
    content: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, default: 'Sarvoch Satta Desk' },
    date: { type: String, required: true }, // Storing the formatted date string for now
}, {
    timestamps: true, // Adds createdAt and updatedAt automatically
});

// Check if model already exists to prevent overwrite error in hot reload
const News: Model<INews> = mongoose.models.News || mongoose.model<INews>('News', NewsSchema);

export default News;
