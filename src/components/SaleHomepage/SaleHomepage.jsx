import Button from '@components/Button/Button';
import styles from './styles.module.scss';
function SaleHomepage() {
    const { container ,title ,description,boxBtn,boxImage} = styles;
    return (
        <div className={container}>
            <div className={boxImage}>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.4-min.jpg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sales Of The Year</h2>
                <p className={description}>
                    Libero sed faucibus facilistis fermentum. Est nibn sed massa
                    sodales
                </p>
                <div className={boxBtn}>

                    <Button content={'Read more'} />
                </div>
            </div>
            <div className={boxImage}>  
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-12.1-min.jpg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomepage;