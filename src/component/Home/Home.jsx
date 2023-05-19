import ExtraSection from "../ExtaraSection/ExtraSection";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import TabSh from "./TabSh/TabSh";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSh></TabSh>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;