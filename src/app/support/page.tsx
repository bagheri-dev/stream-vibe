import type { Metadata } from 'next';
import { Support } from '@/modules/support/Support';

export const metadata: Metadata = {
    title: 'Support | StreamVibe',
    description: 'Get help with StreamVibe. Contact our support team, find answers to FAQs, or resolve issues with streaming, subscriptions, and more.',
    openGraph: {
        title: 'Support | StreamVibe',
        description: 'Get help with StreamVibe. Contact our support team, find answers to FAQs, or resolve issues with streaming, subscriptions, and more.',
        images: [
            {
                url: 'https://streom-vibe.vercel.app/images/logo.webp',
                width: 1200,
                height: 630,
                alt: 'StreamVibe Support',
            },
        ],
    },
};

export default function SupportPage() {
    return (
        <>
            <Support />
        </>
    );
}