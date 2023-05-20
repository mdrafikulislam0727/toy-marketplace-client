import ExtraSection from "../ExtaraSection/ExtraSection";
import ExtaraSectionTo from "../ExtaraSectionTo/ExtaraSectionTo";
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
            <ExtaraSectionTo></ExtaraSectionTo>
        </div>
    );
};

export default Home;