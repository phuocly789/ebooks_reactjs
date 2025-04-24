import MainLayout from '@components/Layout/Layout';
import styles from "./styles.module.scss";
import CountdowtTimer from '@components/CountdownTimer/CountdownTimer';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
function HeadingListProduct() {
    const { container,containerItem } = styles;
   
    return <MainLayout>
        {/* <CountdowtTimer targetDate={targetDate}/> */}
        <div className={container}>
            <CountdownBanner/>
            <div className={containerItem}> 
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    </MainLayout>;
}

export default HeadingListProduct;
