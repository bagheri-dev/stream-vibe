import type { Metadata } from 'next';
import { Subscriptions } from '@/modules/subscriptions/Subscriptions';

export const metadata: Metadata = {
    title: 'Subscriptions | StreamVibe',
    description: 'Choose the perfect subscription plan on StreamVibe to enjoy unlimited movies and TV shows with exclusive benefits and high-quality streaming.',
    openGraph: {
        title: 'Subscriptions | StreamVibe',
        description: 'Choose the perfect subscription plan on StreamVibe to enjoy unlimited movies and TV shows with exclusive benefits and high-quality streaming.',
        images: [
            {
                url: 'https://streom-vibe.vercel.app/images/logo.webp',
                width: 1200,
                height: 630,
                alt: 'StreamVibe Subscriptions',
            },
        ],
    },
};

export default function SubscriptionsPage() {
    return (
        <>
            <Subscriptions />
        </>
    );
}