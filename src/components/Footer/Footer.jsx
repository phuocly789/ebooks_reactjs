import { dataMenu } from '@components/Header/constant';
import styles from './styles.module.scss';
import Logo from '@icons/img/logo.png';
import Visa from '@icons/img/visa.png';
import Master from '@icons/img/master.png';
import Atm from '@icons/img/atm.png';
function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
            <div>
                <img src={Logo} alt='Logo' width={300} height={100} />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item) => (
                    <div>{item.content}</div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p>Guaranteed safe checkout</p>
                <div style={{ display: 'flex', gap: 20, justifyContent: 'center' }}>
                    <img src={Visa} width={50} height={50} alt='' />
                    <img src={Atm} width={50} height={50} alt='' />
                    <img src={Master} width={50} height={50} alt='' />
                </div>

            </div>
            <div style={{ marginTop: '20px', fontSize: '14px', color: '#fff' }}>
                Copyright © 2025 LMPStore Theme. Created by Phuoc Ly
            </div>
        </div>
    );
}

export default MyFooter;
