import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateXImage from '@/hooks/useTranslateXImage';
import { useNavigate } from 'react-router-dom';

function SaleHomepage() {
    const { container, title, des, boxBtn, boxImage } = styles;
    const { translateXPosition } = useTranslateXImage();
    const navigate=useNavigate();
    const handleGoToShop = () => {
        navigate('/shop');
    }
    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Freedom in every fit, softness in every stitch.  Fashion made to move with you.
                </p>

                <div className={boxBtn}>
                    <Button content={'Read more'} isPriamry={false} onClick={handleGoToShop} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;
