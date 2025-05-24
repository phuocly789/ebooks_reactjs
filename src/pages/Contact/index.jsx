import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Logos from '@/pages/AboutUs/components/Logos';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const {
    container,
    functionBox,
    specialText,
    btnBack,
    containerTitle,
    line,
    title,
    textS,
    textL,
    containerContent,
    miniMap,
    shopInfo,
    infoItem,
  } = styles;
  const handleBackPreviousPage = () => {
    window.history.back();
  };

  return (
    <>
      <MyHeader />

      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              <a href="/">Home</a> &gt; <span className={specialText}>Contact</span>
            </div>
            <div className={btnBack} onClick={() => handleBackPreviousPage()}>
              &lt; Return to previous page
            </div>
          </div>

          <div className={containerTitle}>
            <div className={line}>
              <div className={title}>
                <div className={textS}>get in touch</div>
                <div className={textL}>Contact Us</div>
              </div>
            </div>
          </div>

          <div className={containerContent}>
            <div className={miniMap}>
              {isMapLoading && <div className={styles.spinner}></div>}

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.097924244307!2d106.62541297452019!3d11.03127945444224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d220690c1ff5%3A0xba40ea2a923a1a2f!2zNzg5IE5ndXnhu4VuIENow60gVGhhbmgsIFTDom4gQW4sIFRo4bunIEThuqd1IE3hu5l0LCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1748054754766!5m2!1svi!2s"
                width="500"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoading(false)}
              ></iframe>
            </div>

            {/* Shop Info */}
            <div className={shopInfo}>
              <h3>LMP Store</h3>
              <p className={infoItem}>Your trusted store for premium products since 2010.</p>
              <div className={infoItem}>
                <span>📍</span>
                <p>789 Nguyen Chi Thanh, Tan An Ward, Thu Dau Mot City, Binh Duong Province, Vietnam</p>
              </div>
              <div className={infoItem}>
                <span>📞</span>
                <p>+84 363 986 372</p>
              </div>
              <div className={infoItem}>
                <span>📧</span>
                <p>support@lmpstore.com</p>
              </div>
              <div className={infoItem}>
                <span>⏰</span>
                <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: 10:00 AM - 4:00 PM</p>
              </div>
              {/* <div className={infoItem}>
                <span>📱</span>
                <p>Customer Support: +84 123 456 789</p>
              </div>
              <div className={infoItem}>
                <span>🌐</span>
                <p>
                  Follow us:
                  <a href="https://facebook.com/lmpstore" target="_blank" rel="noopener noreferrer"> Facebook</a> |
                  <a href="https://instagram.com/lmpstore" target="_blank" rel="noopener noreferrer"> Instagram</a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </MainLayout>

      <MyFooter />
    </>
  );
}

export default Contact;
