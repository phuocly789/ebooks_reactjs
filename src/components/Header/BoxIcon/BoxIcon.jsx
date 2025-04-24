import styles from '../styles.module.scss'
import fbIcons from '@icons/svgs/facebookIcon.svg';
import insIcons from '@icons/svgs/instagramIcon.svg';
import ytbIcons from '@icons/svgs/youtubeIcon.svg';

function BoxIcon({ type, href }) {
    const { boxIcon } = styles;
    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcons;
            case 'ins':
                return insIcons;
            case 'ytb':
                return ytbIcons;
        }
    }
    return <div className={boxIcon}>
        <img src={handleRenderIcon(type)} alt="" />
    </div>;
}

export default BoxIcon;
