'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
    showSpinner: false,
    trickleSpeed: 300,
});

const ProgressBar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleAnchorClick = (event: MouseEvent) => {
            const target = event.currentTarget as HTMLAnchorElement;
            if (
                target.href &&
                target.target !== '_blank' &&
                !target.download &&
                target.href.startsWith(window.location.origin) &&
                !target.href.includes('#')
            ) {
                NProgress.start();
            }
        };

        const handleRouteChangeComplete = () => {
            NProgress.done();
        };

        const anchors = document.querySelectorAll('a[href]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        const timeout = setTimeout(() => {
            NProgress.done();
        }, 300);

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
            clearTimeout(timeout);
            NProgress.done();
        };
    }, [pathname, searchParams]);

    return null;
};

export default ProgressBar;