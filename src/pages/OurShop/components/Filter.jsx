import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import cls from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
import { useLocation } from 'react-router-dom';

function Filter() {
    const { containerFilter, boxIcon, boxLeft, selectBox, show, sort } = styles;
    const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid, handleSearch } =
        useContext(OurShopContext);
    const [searchInput, setSearchInput] = useState('');

    const getValueSelect = (value, type) => {
        if (type === 'sort') {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleGetShowGrid = (type) => {
        setIsShowGrid(type === 'grid');
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchInput(query);
        handleSearch(query);
    };
    const location = useLocation();
    const inputRef = useRef();
    useEffect(() => {
        if (location.state?.focusSearchInput) {
            inputRef.current?.focus();
        }
    }, [location.state]);
    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type="sort"
                />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{ fontSize: '25px', cursor: 'pointer' }}
                        onClick={() => handleGetShowGrid('grid')}
                    />
                    <div
                        style={{
                            height: '20px',
                            width: '1px',
                            backgroundColor: '#e1e1e1',
                        }}
                    />
                    <CiCircleList
                        style={{
                            fontSize: '27px',
                            color: '#222',
                            cursor: 'pointer',
                        }}
                        onClick={() => handleGetShowGrid('list')}
                    />
                </div>
            </div>
            <div className={boxLeft}>
                <div
                    style={{
                        fontSize: '14px',
                        color: '#555',
                    }}
                >
                    Show
                </div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type="show"
                />
            </div>
        </div>
    );
}

export default Filter;