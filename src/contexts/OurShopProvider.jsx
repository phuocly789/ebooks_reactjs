import { createContext, useState, useEffect } from 'react';
import { getProducts } from '@/api/productsService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
    const sortOptions = [
        { label: 'Default sorting', value: '0' },
        // { label: 'Sort by popularity', value: '1' },
        // { label: 'Sort by average rating', value: '2' },
        // { label: 'Sort by latest', value: '3' },
        { label: 'Sort by price: low to high', value: '4' },
        { label: 'Sort by price: high to low', value: '5' },
    ];

    const showOptions = [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: 'all' },
    ];

    const [sortId, setSortId] = useState('0');
    const [showId, setShowId] = useState('8');
    const [isShowGrid, setIsShowGrid] = useState(true);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch products from API
    const fetchProducts = async (query) => {
        setIsLoading(true);
        try {
            const res = await getProducts(query);
            setProducts(res.contents);
            setFilteredProducts(res.contents);
            setTotal(res.total);
            setPage(+res.page);
        } catch (err) {
            console.log(err);
        }
        setIsLoading(false);
    };

    const handleSearch = (query) => {
        console.log('Search triggered with query:', query);
        setSearchQuery(query);
        setPage(1);

        if (!query.trim()) {
            setFilteredProducts(products); // Không nhập gì thì hiện lại tất cả
            return;
        }

        const lowerCaseQuery = query.trim().toLowerCase();

        const filtered = products.filter((item) =>
            item.name.toLowerCase().includes(lowerCaseQuery) // 🔍 lọc theo tên sản phẩm
        );

        setFilteredProducts(filtered);
    };


    // Handle load more
    const handleLoadMore = async () => {
        const query = {
            sortType: sortId,
            page: page + 1,
            limit: showId,
            search: searchQuery,
        };
        setIsLoadMore(true);
        try {
            const res = await getProducts(query);
            setFilteredProducts((prev) => [...prev, ...res.contents]);
            setPage(+res.page);
            setTotal(res.total);
        } catch (err) {
            console.log(err);
        }
        setIsLoadMore(false);
    };

    // Update products when sortId or showId changes
    useEffect(() => {
        const query = {
            sortType: sortId,
            page: 1,
            limit: showId,
            search: '',
        };
        fetchProducts(query);
    }, [sortId, showId]);

    const values = {
        sortOptions,
        showOptions,
        setSortId,
        setShowId,
        setIsShowGrid,
        products: filteredProducts,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore,
        searchQuery,
        handleSearch,
    };

    return <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>;
};