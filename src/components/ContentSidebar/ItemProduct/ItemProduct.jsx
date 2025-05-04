import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import Logo from '@icons/img/logo.png';
import { IoCloseOutline } from 'react-icons/io5';
function ItemProduct() {
    const { container, boxContent, title, price, boxCLose } = styles;
    return (
        <div className={container}>
            <img src={Logo} alt='' />
            <div className={boxCLose}>
                <IoCloseOutline fontSize={30} />
            </div>
            <div className={boxContent}>

                <div className={title}>Title Product</div>
                <div className={price}>$1111</div>
            </div>
         
        </div>
    );
}

export default ItemProduct;
