import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';

function Banner() {
    const { container, content, title, des } = styles;
    const navigate = useNavigate();
    const handleGoToShop = () => {
        navigate('/shop');
    }
    return (
        <div className={container}>
            <div className={content}>
                <img
                    src={Logo}
                    alt="Logo"
                    style={{
                        width: '400px',
                        height: '200px',
                    }}
                />
                <div className={des}>
                    Make yours celebrations even more special this years with
                    beautiful.
                </div>

                <div
                    style={{
                        width: '172px',
                        marginRight:'20px'
                    }}
                >
                    <Button content={'Go to shop'} onClick={handleGoToShop}  />
                </div>
            </div>
        </div>
    );
}

export default Banner;
