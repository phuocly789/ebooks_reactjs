import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeading() {
    const { container,headline,containerMiddleBox,title,desc  } = styles;
    return(
    <MainLayout>
        <div className={container}>
            <div className={headline}></div>
            <div className={containerMiddleBox}>
                <div className={desc}>Đừng bỏ lỡ ưu đãi siêu hot!</div>
                <div className={title}>Sản phẩm được yêu thích nhất</div>
            </div>
            <div className={headline}></div>
        </div>
    </MainLayout>);
}

export default AdvanceHeading;
