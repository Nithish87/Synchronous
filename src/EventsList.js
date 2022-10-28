import { Link } from "react-router-dom";

//import events from "./data";

const EventsList = ({events,title}) => {

    //console.log(events);

    //to={`/blogs/${event.id}`
    const eventsR=events.reverse();

    return ( 
        <div className="event-list">
            <h1><b>{title}</b></h1>
            <br></br>
            {events.slice(0).reverse().map((event) => (
                <div className="event-Preview" key={event.id}>
                        <img src={event.image} alt="No Image"/>
                        <h2>{event.title}</h2>
                        <a href={event.link}><button className="viewButton">Go to map</button></a>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
             <br></br><br></br><br></br>
        </div>
     );
}
 
export default EventsList;