import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";

import Info from "@components/Info/Info";
import AdvanceHeading from "@components/AdvanceHeading/AdvanHeading";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
function HomePage() {
    const {container}=styles
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info/>
                <AdvanceHeading/>
                <HeadingListProduct/>
            </div>
        </div>
    );
}

export default HomePage;