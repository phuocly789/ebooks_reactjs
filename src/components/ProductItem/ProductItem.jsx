import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cart.svg';
function ProductItem({ src, preSrc, name, prices }) {
    const { boxImage, title,price,showImgWhenHover, showFunctionWhenHover, boxIcon } =
        styles;
    return (
        <div>
            <div className={boxImage}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    className={showImgWhenHover}
                    src={preSrc}
                    alt=''
                />
                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={price}>${prices}</div>
        </div>
    );
}

export default ProductItem; 
