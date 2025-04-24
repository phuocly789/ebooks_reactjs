import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/img/logo.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cart.svg';

function MyHeader() {

    const { containerBoxIcon, containerMenu, containerHeader, containerBox,container } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return <BoxIcon type={item.type} href={item.href} />;
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                </div>
                <div><img src={Logo} width="450px" alt="logo" /></div>
                <div>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, 6).map((item) => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                </div>
                <div className={containerBoxIcon}>
                    <img src={reloadIcon} width={26} height={26} alt="reload" />
                    <img src={heartIcon} width={26} height={26} alt="heart" />
                    <img src={cartIcon} width={26} height={26} alt="cart" />
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
