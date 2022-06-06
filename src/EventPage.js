import useFetch from "./useFetch";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const EventPage = () => {

    //To get the sent id
    const {id}=useParams();
    const { data: event, isPending, error } = useFetch('http://localhost:8000/content/' + id);

    return (
        <div className="View">

            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {event && (
                <div>
                    <h1>{event.title}</h1>
                    <h3>Location Link: {event.link}</h3>
                    <div>
                        <img src={event.image} alt="No images"/>
                    </div>
                </div>
            )}

        </div>
    );
}

export default EventPage;