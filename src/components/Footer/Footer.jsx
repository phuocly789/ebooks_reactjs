import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.png';
import ComingSoonWrapper from '@components/ComingSoonWrapper/ComingSoonWrapper';

function MyFooter() {
    const { container, boxNav } = styles;
    return (
        <div className={container}>
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
            <div>
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Guaranteed safe checkout
                </p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt=''
                />
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                Copyright © 2025 LMP theme. Created by Ly Minh Phuoc
            </div>
        </div>
    );
}

export default MyFooter;
