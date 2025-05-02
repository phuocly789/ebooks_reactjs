import useScrollHanding from '@/hooks/useScrollHanding';
import { useEffect, useState } from 'react';

const useTransLateXImg = () => {
    const { scrollPosition, scrollDirection } = useScrollHanding();
    const [translateXPosition, setTranslateXPosition] = useState(80); // Sửa lỗi chính tả

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition, scrollDirection]);

    return { translateXPosition };
};

export default useTransLateXImg;
