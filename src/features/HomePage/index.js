import HeroWrapper from "../../common/HeroWrapper";
import Offer from "./Offer";
import Introduction from "./Introduction";
import Newsletter from "./Newsletter";

const HomePage = () => {
    return (
        <>
            <HeroWrapper title="home" />
            <Introduction />
            <Offer />
            <Newsletter />
        </>
    )
}

export default HomePage;