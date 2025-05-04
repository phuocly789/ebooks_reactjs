import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider'; // ✅ Dùng named import
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSidebar/Login/Login';
import Compare from '@components/ContentSidebar/Compare/Compare';

function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen,type } = useContext(SideBarContext);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'cart':
                return <div>Cart</div>;
            case 'compare':
                return <Compare />;
            case 'wishList':
                return <div>wishlist</div>;
            default:
                return <Login />;
        }
    }
    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
            />
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon}>
                        <TfiClose onClick={handleToggle} />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
