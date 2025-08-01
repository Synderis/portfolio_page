import { useEffect } from 'react';

export default function useFadeInOnScroll(ref: React.RefObject<HTMLDivElement>, delay: number = 0) {
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        node.classList.remove('is-visible');
        let hasFadedIn = false;
        let timeoutId: any = null;
        const handleScroll = () => {
            if (hasFadedIn) return;
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                if (!node.classList.contains('is-visible')) {
                    timeoutId = setTimeout(() => {
                        node.classList.add('is-visible');
                        hasFadedIn = true;
                    }, delay * 1000);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [ref, delay]);
}