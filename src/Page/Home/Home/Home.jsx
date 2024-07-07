import Footer from '../../../Shared/Footer/Footer';
import Accordion from '../Accordion/Accordion';
import Banner from '../Banner/Banner';
import CanadaTab from '../CanadaTab/CanadaTab';
import Connection from '../Connection/Connection';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import DestinationCard from '../DestinationCard/DestinationCard';
import EducationFair from '../EducationFair/EducationFair';
import Events from '../Events/Events';
import ImageGallery from '../ImageGallery/ImageGallery';
import MeetOurFounder from '../MeetOurFounder/MeetOurFounder';
import PastEvents from '../PastEvents/PastEvents';
import Tab from '../Tab/Tab';
import Testimonial from '../Testimonial/Testimonial';
import Thebest from '../TheBest/Thebest';
import Ticker from '../Ticker/Ticker';
import UniversityList from '../UniversityList/UniversityList';
import './Home.css'

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner>
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
            <Footer></Footer> */}
            <Accordion></Accordion>
            <MeetOurFounder></MeetOurFounder>
            <Thebest></Thebest>
            {/* <CanadaTab></CanadaTab> */}
            <EducationFair></EducationFair>
            <PastEvents></PastEvents>
        </div>
    );
};

export default Home;