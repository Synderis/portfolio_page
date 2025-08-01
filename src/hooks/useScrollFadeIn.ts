import { useEffect } from 'react';

export default function useScrollFadeIn(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        node.classList.remove('is-visible');
        let hasFadedIn = false;
        const onScroll = () => {
            if (hasFadedIn) return;
            const rect = node.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                node.classList.add('is-visible');
                hasFadedIn = true;
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [ref]);
}
