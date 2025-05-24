import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import Button from '@components/Button/Button';
import { useNavigate } from 'react-router-dom';
function CountdownBanner() {
    const { container, containerTimmer, title, boxBtn } = styles;
    const targetDate = '2025-05-31T00:00:00';
    const navigate=useNavigate();
    const handleBuyNow=()=>{
        navigate('/shop');
    }
    return (
        <div className={container}>
            <div className={containerTimmer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <Button content={'Buy now'} onClick={handleBuyNow}/>
            </div>
        </div>
    );
}

export default CountdownBanner;
