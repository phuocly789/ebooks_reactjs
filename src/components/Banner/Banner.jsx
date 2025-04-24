import Button from '@components/Button/Button';
import styles from './styles.module.scss';
function Banner() {
    const{container,content,tittle,desc}=styles
    return ( <div className={container}>
        <div className={content}>
            <h1 className={tittle}><b><span style={{ color:"blue" }}>LMP</span>STORE WELCOME</b></h1>
            <div className={desc}>Mặc là thể hiện – khác biệt là thành công</div>
            <Button content={'GO TO SHOP'}/>
        </div>
    </div> );
}

export default Banner;