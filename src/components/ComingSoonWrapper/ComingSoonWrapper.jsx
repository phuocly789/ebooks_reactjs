import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

function ComingSoonWrapper({ children }) {
    const [show, setShow] = useState(false);
    const { clickable, overlay, modal, closeBtn } = styles;

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow(true);
    };

    const handleClose = () => setShow(false);

    // 👇 Auto close modal after 2 seconds
    useEffect(() => {
        let timer;
        if (show) {
            timer = setTimeout(() => {
                setShow(false);
            }, 1000); // 2000ms = 2s
        }
        return () => clearTimeout(timer);
    }, [show]);

    const childWithHandler = React.cloneElement(children, {
        href: '#',
        onClick: handleClick,
    });

    return (
        <>
            <div className={clickable}>
                {childWithHandler}
            </div>

            {show && (
                <div className={overlay} onClick={handleClose}>
                    <div className={modal} onClick={(e) => e.stopPropagation()}>
                        <p>🚧 Coming Soon 🚧</p>
                        <button className={closeBtn} onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ComingSoonWrapper;
