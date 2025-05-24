import { useContext } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/storeProvider';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogOut } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === href;

  const navigate = useNavigate();

  const handleClickShowLogin = () => {
    if (content === 'Sign in' && !userInfo) {
      setIsOpen(true);
      setType('login');

      return;
    }
    if (content === 'Search') {
      // điều hướng sang /shop và truyền state báo focus input
      navigate('/shop', { state: { focusSearchInput: true } });
      return;
    }
    navigate(href);
  };

  const handleRenderText = (content) => {
    if (content === 'Sign in' && userInfo) {
      return `Hello: ${userInfo?.username}`;
    } else {
      return content;
    }
  };

  const handleHover = () => {
    if (content === 'Sign in' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={`${menu} ${isActive ? styles.active : ''}`}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}

      {isShowSubMenu && (
        <div
          onMouseLeave={() => setIsShowSubMenu(false)}
          className={subMenu}
          onClick={handleLogOut}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
