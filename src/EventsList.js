import { Link } from "react-router-dom";

//import events from "./data";

const EventsList = ({events,title}) => {

    //console.log(events);

    //to={`/blogs/${event.id}`

    return ( 
        <div className="blog-list">
            <h1><b>{title}</b></h1>
            <br></br>
            {events.map((event) => (
                <div className="blog-Preview" key={event.id}>
                    <Link to="">
                        <h2>{event.title}</h2></Link>
                        <button>View</button>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete Blog</button> */}
                </div>
            ))}
        </div>
     );
}
 
export default EventsList;