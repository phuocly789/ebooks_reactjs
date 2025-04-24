import { dataInfo } from '@components/Info/constants';
import InfoCart from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
function Info() {
    const {container}=styles;
    return (
            <MainLayout>
                <div className={container}>
                    {dataInfo.map((item) => {
                        return <InfoCart content={item.title} description={item.decs} src={item.src} />;
                    })}
                </div>
            </MainLayout>
    );
} 

export default Info;
