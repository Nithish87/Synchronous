import Footer from "./Footer";
import EventsMenu from "./EventsMenu";
import SearchBar from "./SearchBar";
import useFetch from "./useFetch";
import { useContext, useEffect, useState } from "react";
import content from "./data";
<<<<<<< HEAD
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import EventsList from "./EventsList";
=======
import { distance } from "./backend/distance";
import { AuthContext } from "./backend/Auth";
import { get, child, ref } from "firebase/database";
import { db } from "./backend/firebase-config";
>>>>>>> 759a3de695bf35e46727e7fcf4e1af6e70042b10

const HomePage = () => {
  const dist1 = [];

  const lat2 = content[1].location.lattitude;
  const lon2 = content[1].location.longitude;
<<<<<<< HEAD
  console.log(dist);

  const {data:events,isPending,error}=useFetch('http://localhost:8000/content');

  //for getting current user details
  const getUsers = async () => {
    const dbRef = ref(db);
    await get(child(dbRef, `users/${currentUser.uid}`))
=======
  const { currentUser } = useContext(AuthContext);
  const dbRef = ref(db);
  const [user, setuser] = useState(null);
  const getUsers = () => {
    get(child(dbRef, `users/${currentUser.uid}`))
>>>>>>> 759a3de695bf35e46727e7fcf4e1af6e70042b10
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
  const CalcNearest = (user) => {
    //console.log("hi");
    if (user) {
      content.forEach((item, index) => {
        console.log(
          user.location.latitude,
          item.location.lattitude,
          user.location.longitude,
          item.location.longitude
        );
        console.log(
          distance(
            user.location.latitude,
            item.location.lattitude,
            user.location.longitude,
            item.location.longitude
          ).toString()
        );

        dist1.push(
          distance(
            user.location.latitude,
            item.location.lattitude,
            user.location.longitude,
            item.location.longitude
          ).toString()
        );
      });
      console.log(dist1);
    }
  };
  useEffect(() => {
    getUsers();
    if (user) {
      CalcNearest(user);
    }
  }, []);

<<<<<<< HEAD
  //const title="Events Nearby!";

=======
>>>>>>> 759a3de695bf35e46727e7fcf4e1af6e70042b10
  return (
    <div className='home'>
      <SearchBar />
      <div className="events">
            {/* <h1><b>Events Nearby!</b></h1>
            <br></br> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {events && <EventsList events={events} title="Events Nearby!"/>}
            </div>
      {/* <h1>Current user latitude:{user && user.location.latitude}</h1>
      <h1>Current user longitude:{user && user.location.longitude}</h1>
      <h1>
        Accident Happend in Banglore: latitude:{lat2} longitude:{lon2}
      </h1>
<<<<<<< HEAD
      <h1>distance:{dist}KMs</h1>
      <h2>
        We need to calculate distance between current users's location and every
        accidents.Then we select police station or hospital based on nearest
        distance.
      </h2> */}
=======
      {/* <h1>distance:{dist}KMs</h1> */}

>>>>>>> 759a3de695bf35e46727e7fcf4e1af6e70042b10
      <Footer />
    </div>
  );
};

export default HomePage;
