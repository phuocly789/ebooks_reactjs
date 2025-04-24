import MainLayout from "@components/Layout/Layout";
import styles from '../styles.module.scss';
function InfoCard({content,description,src}) {

    const{containerCard,containerContent,title,decs}=styles
    return ( <div className={containerCard}>
        <img width={40} height={41} src={src} alt="" />
        <div className={containerContent}>
            <div className={title}>{content}</div>
            <div className={decs}>{description}</div>
        </div>
    </div>);
}

export default InfoCard;