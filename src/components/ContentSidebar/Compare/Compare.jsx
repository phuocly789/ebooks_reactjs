import HeaderSidebar from '@components/ContentSidebar/HeaderSidebar/HeaderSide';
import styles from './styles.module.scss';
import { TfiReload } from 'react-icons/tfi';
import ItemProduct from '@components/ContentSidebar/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function Compare() {
    const {container}=styles;
    return (
        <div className={container}>
            <HeaderSidebar icon={<TfiReload fontSize={40}/>} title='Compare'/>
            <ItemProduct/>
            <Button content="View Compare"/>
        </div>
    );
}

export default Compare;
