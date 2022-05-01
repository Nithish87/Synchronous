//import SearchIcon from '@mui/icons-material/Search';
import EventsMenu from './EventsMenu';
import SearchBar from './SearchBar';
import useFetch from "./useFetch";

const HomePage = () => {

    const {data:events,isPending,error}=useFetch('http://localhost:8000/events');

    return ( 
        <div className="home">
            <SearchBar/>
            <div className="events">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {events && <EventsMenu events={events} title="Events Nearby" />}
            </div>
        </div>
     );
}
 
export default HomePage;