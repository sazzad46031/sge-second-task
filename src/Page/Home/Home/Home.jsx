import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Connection from '../Connection/Connection';
import Counter from '../Counter/Counter';
import DestinationCard from '../DestinationCard/DestinationCard';
import Tab from '../Tab/Tab';
import Testimonial from '../Testimonial/Testimonial';
import Ticker from '../Ticker/Ticker';
import UniversityList from '../UniversityList/UniversityList';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tab></Tab>
            <Counter></Counter>
            <Ticker></Ticker>
            <Testimonial></Testimonial>
            <Connection></Connection>
            <DestinationCard></DestinationCard>
            <UniversityList></UniversityList>
            <Footer></Footer>
        </div>
    );
};

export default Home;