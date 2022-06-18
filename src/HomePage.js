import Footer from "./Footer";
import EventsMenu from "./EventsMenu";
import SearchBar from "./SearchBar";
import useFetch from "./useFetch";
import { db, auth } from "./backend/firebase-config";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./backend/Auth";
import { getDatabase, ref, child, get } from "firebase/database";
import content from "./data";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import EventsList from "./EventsList";

//Import for Notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = () => {
  const [user, setuser] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [dist, setdist] = useState("");
  const lat2 = content[1].location.lattitude;
  const lon2 = content[1].location.longitude;
  console.log(dist);

  const {data:events,isPending,error}=useFetch('http://localhost:8000/events');

  //for getting current user details
  const getUsers = async () => {
    const dbRef = ref(db);
    await get(child(dbRef, `users/${currentUser.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setuser(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //calculation of distance

  const distance = (lat1, lat2, lon1, lon2) => {
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;

    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
    let c = 2 * Math.asin(Math.sqrt(a));
    let r = 6371;
    return Math.round(c * r);
  };

  useEffect(() => {
    console.log("hi");
    getUsers();
    if (user) {
      const lat1 = user.location.latitude;
      const lon1 = user.location.longitude;
      setdist(distance(lat1, lat2, lon1, lon2).toString());
    }
  }, []);

  //Variable for notification
  const notify = () => toast.error("Lorem ipsum dolor", {
    theme: "colored"
  })
  //Sound
  const play=()=> {
    var audio = new Audio("../data/Audio/beep.mp3");
    audio.play();
}


  //const title="Events Nearby!";

  return (
    <div className='home'>
      {/* <SearchBar /> */}
      <div className="events">
            {/* <h1><b>Events Nearby!</b></h1>
            <br></br> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {events && <EventsList events={events} title="Events Nearby!"/>}
      </div>
      {/*Calling notification*/}
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <button onclick={play()}>Press Here!</button>
      <Footer />
    </div>
  );
};

export default HomePage;
