import { Link } from "react-router-dom";

//import events from "./data";

const EventsList = ({events,title}) => {

    //console.log(events);

    //to={`/blogs/${event.id}`

    return ( 
        <div className="event-list">
            <h1><b>{title}</b></h1>
            <br></br>
            {events.slice(0).reverse().map((event) => (
                <div className="event-Preview" key={event.id}>
                        <h2>{event.title}</h2>
                        <Link to={`/view/${event.id}`}><button className="viewButton">View</button></Link>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
             <br></br><br></br><br></br>
        </div>
     );
}
 
export default EventsList;