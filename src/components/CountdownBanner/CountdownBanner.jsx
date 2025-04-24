import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
function CountdownBanner() {
    const { container, containerTimer, title,btn } = styles
    const targetDate = '2025-10-11T00:00:00';
    return (<div className={container}>
        <div className={containerTimer}>
            <CountdownTimer targetDate={targetDate} />
        </div>
        <p className={title}>XU HƯỚNG CỔ ĐIỂN ĐANG TRỞ LẠI </p>
        <div className={btn}>
            <Button content="Buy Now" />
        </div>
    </div>);
}

export default CountdownBanner;