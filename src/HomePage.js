//import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';

const HomePage = () => {
    return ( 
        <div className="home">
            <SearchBar/>
            <div className="events">
                <h1><b><u>Events Nearby</u></b></h1>
            </div>
        </div>
     );
}
 
export default HomePage;