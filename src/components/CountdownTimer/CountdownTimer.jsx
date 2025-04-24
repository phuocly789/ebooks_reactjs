// CountdownTimer.js
import styles from './styles.module.scss';
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const { box, title,box_wrapper } = styles;
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                Day: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minute: Math.floor((difference / 1000 / 60) % 60),
                Second: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatNumber = (number) => String(number).padStart(2, '0');

    const timerComponents = Object.keys(timeLeft).map((interval) => (
         <span key={interval} className={box}>
            {formatNumber(timeLeft[interval])}{' '}
            <span className={title}>{interval}</span>{' '}
        </span>
    ));

    return (
        <div className={box_wrapper}>
            {Object.keys(timeLeft).length === 0 ? (
                <span>Time’s up!</span>
            ) : (
                timerComponents
            )}
        </div>
    );
};

export default CountdownTimer;
