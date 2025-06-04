import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import ProductItem from '@components/ProductItem/ProductItem';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';

function ListProducts() {
    const { containerProduct, sectionListProduct } = styles;
    const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
        useContext(OurShopContext);

    return (
        <div className={sectionListProduct}>
            <MainLayout>
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ''}>
                            {products.length > 0 ? (
                                products.map((item) => (
                                    <ProductItem
                                        key={item.id}
                                        src={item.images[0]}
                                        prevSrc={item.images[1]}
                                        name={item.name}
                                        price={item.price}
                                        details={item}
                                        isHomepage={false}
                                    />
                                ))
                            ) : (
                                <p>No products found.</p>
                            )}
                        </div>
                        {products.length < total && (
                            <div
                                style={{
                                    width: '180px',
                                    margin: '50px auto',
                                }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <LoadingTextCommon />
                                        ) : (
                                            'Tai Them'
                                        )
                                    }
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;