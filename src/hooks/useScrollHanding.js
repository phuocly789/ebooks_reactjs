import { use, useEffect, useRef, useState } from 'react';

const useScrollHanding = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
    const previousScrollPosition = useRef(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down');
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up');
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setScrollPosition(
            currentScrollPosition <= 0 ? 0 : currentScrollPosition
        );
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollTracking);
        return () => {
            window.removeEventListener('scroll', scrollTracking);
        };
    }, []);

    return { scrollDirection, scrollPosition };
};
export default useScrollHanding;
