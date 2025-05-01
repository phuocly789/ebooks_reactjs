import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';

import Info from '@components/Info/Info';
import AdvanceHeading from '@components/AdvanceHeading/AdvanHeading';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PropularProduct';
function HomePage() {
    const [listProduct, setListProduct] = useState([]);
    useEffect(() => {
        getProducts()
            .then((res) => {
                setListProduct(res.contents);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeading />
                <HeadingListProduct data={listProduct.slice(0,2)}/>
                <PopularProduct data={listProduct.slice(2,listProduct.length)}/>
            </div>
        </div>
    );
}

export default HomePage;
