import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Tab from '../Tab/Tab';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tab></Tab>
            <Counter></Counter>
        </div>
    );
};

export default Home;