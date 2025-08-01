import { useEffect } from 'react';

export default function useFadeInOnDelay(ref: React.RefObject<HTMLDivElement>, delay: number = 0) {
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        node.classList.remove('is-visible');
        let timeoutId: any = null;
        timeoutId = setTimeout(() => {
            node.classList.add('is-visible');
        }, delay * 1000);
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [ref, delay]);
}
