import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import { BsHeart } from 'react-icons/bs';
import { PiShoppingCart } from 'react-icons/pi';
import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';

function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
    boxCart,
    quantity,
  } = styles;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const {
    setIsOpen,
    setType,
    listProductCart,
    userId,
    handleGetListProductsCart,
  } = useContext(SideBarContext);
  const { userInfo } = useContext(StoreContext);

  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  const handleOpenCartSideBar = () => {
    handleGetListProductsCart(userId, 'cart');
    handleOpenSideBar('cart');
  };

  const totalItemCart = listProductCart.length
    ? listProductCart.reduce((acc, item) => {
      return (acc += item.quantity);
    }, 0)
    : 0;

  useEffect(() => {
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  // Chia menu thành bên trái và bên phải dựa trên trạng thái đăng nhập
  const leftMenuItems = userInfo
    ? dataMenu.filter((item) => ['Our Shop', 'About us', 'Contacts'].includes(item.content))
    : dataMenu.filter((item) => ['Our Shop', 'About us'].includes(item.content));

  const rightMenuItems = userInfo
    ? dataMenu.filter((item) => ['Search', 'Sign in'].includes(item.content))
    : dataMenu.filter((item) => ['Contacts', 'Search', 'Sign in'].includes(item.content));

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        {/* Left Section */}
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {leftMenuItems.map((item) => (
              <Menu key={item.content} content={item.content} href={item.href} />
            ))}
          </div>
        </div>

        {/* Centered Logo */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: '400px',
              height: '200px',
            }}
          />
        </div>

        {/* Right Section */}
        <div className={containerBox}>
          <div className={containerMenu}>
            {rightMenuItems.map((item) => (
              <Menu key={item.content} content={item.content} href={item.href} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            {/* <BsHeart
              style={{ fontSize: '20px' }}
              onClick={() => handleOpenSideBar('wishlist')}
            /> */}
            <div className={boxCart}>
              <PiShoppingCart
                style={{ fontSize: '25px' }}
                onClick={() => handleOpenCartSideBar()}
              />
              <div className={quantity}>
                {totalItemCart || userInfo?.amountCart || 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;