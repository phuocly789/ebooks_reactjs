import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './styles.module.scss';
import Logo from '@icons/img/logo.png';
import { TfiReload } from 'react-icons/tfi';
import { BsHeart } from 'react-icons/bs';

import { PiShoppingCart } from 'react-icons/pi';
import useScrollHanding from '@/hooks/useScrollHanding';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
// import SideBarContext from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;
    const { scrollPosition } = useScrollHanding();
    const [fixed, setFixed] = useState(false);

    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    }

    useEffect(() => {
        setFixed(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixed
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => (
                            <BoxIcon
                                key={item.type}
                                type={item.type}
                                href={item.href}
                            />
                        ))}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => (
                            <Menu
                                key={item.content}
                                content={item.content}
                                href={item.href}

                            />
                        ))}
                    </div>
                </div>
                <div>
                    <img src={Logo} width='450' alt='logo' />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, 6).map((item) => (
                            <Menu
                                key={item.content}
                                content={item.content}
                                href={item.href}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload style={{ fontSize: '20px' }} onClick={()=>handleOpenSideBar("compare")} />
                        <BsHeart style={{ fontSize: '20px' }} onClick={()=>handleOpenSideBar('wishList')} />
                        <PiShoppingCart style={{ fontSize: '20px' }} onClick={()=>handleOpenSideBar('cart')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
