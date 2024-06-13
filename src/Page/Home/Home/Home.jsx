import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Connection from '../Connection/Connection';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import DestinationCard from '../DestinationCard/DestinationCard';
import Events from '../Events/Events';
import ImageGallery from '../ImageGallery/ImageGallery';
import Tab from '../Tab/Tab';
import Testimonial from '../Testimonial/Testimonial';
import Ticker from '../Ticker/Ticker';
import UniversityList from '../UniversityList/UniversityList';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <Tab></Tab>
            <Counter></Counter>
            <Ticker></Ticker>
            <Testimonial></Testimonial>
            <Connection></Connection>
            <DestinationCard></DestinationCard>
            <UniversityList></UniversityList>
            <ImageGallery></ImageGallery>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;