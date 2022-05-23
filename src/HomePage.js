import Footer from './Footer';
import EventsMenu from './EventsMenu';
import SearchBar from './SearchBar';
import useFetch from "./useFetch";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

    const {data:events,isPending,error}=useFetch('http://localhost:8000/events');

    return ( 
        <div className="home">
            <SearchBar/>
            <div className="events">
            <h1><b>Events Nearby!</b></h1>
            <br></br>
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {events && <EventsMenu events={events}  />}
            </div>
            <Footer/>
        </div>
     );
}
 
export default HomePage;