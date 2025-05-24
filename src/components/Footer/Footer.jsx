import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import ComingSoonWrapper from '@components/ComingSoonWrapper/ComingSoonWrapper';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function MyFooter() {
    const { container, boxNav, scrollToTop } = styles;
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className={container}>
                {/* Nếu cần logo thì mở comment */}
                {/* <div>
          <img
            src={Logo}
            alt=''
            width={400}
            height={200}
          />
        </div> */}

                <div className={boxNav}>
                    {dataMenu.map((item, index) => (
                        <div key={index}>
                            {item.comingSoon ? (
                                <ComingSoonWrapper>
                                    <a>{item.content}</a>
                                </ComingSoonWrapper>
                            ) : (
                                <a href={item.href}>{item.content}</a>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                    <p>Guaranteed safe checkout</p>
                    <img
                        src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                        alt=''
                    />
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    Copyright © 2025 LMP theme. Created by Ly Minh Phuoc
                </div>
            </div>

            {/* Nút scroll to top */}
            {showScroll && (
                <div className={scrollToTop} onClick={handleScrollToTop}>
                    <FaArrowUp />
                </div>
            )}
        </>
    );
}

export default MyFooter;
