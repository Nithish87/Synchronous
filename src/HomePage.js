import Footer from "./Footer";
import EventsMenu from "./EventsMenu";
import SearchBar from "./SearchBar";
import useFetch from "./useFetch";
import { useContext, useEffect, useState } from "react";
import content from "./data";
import { distance } from "./backend/distance";
import { AuthContext } from "./backend/Auth";
import { get, child, ref } from "firebase/database";
import { db } from "./backend/firebase-config";

const HomePage = () => {
  const dist1 = [];

  const lat2 = content[1].location.lattitude;
  const lon2 = content[1].location.longitude;
  const { currentUser } = useContext(AuthContext);
  const dbRef = ref(db);
  const [user, setuser] = useState(null);
  const getUsers = () => {
    get(child(dbRef, `users/${currentUser.uid}`))
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

  return (
    <div className='home'>
      <SearchBar />
      {/* <div className="events">
            <h1><b>Events Nearby!</b></h1>
            <br></br>
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {events && <EventsMenu events={events}  />}
            </div> */}
      <h1>Current user latitude:{user && user.location.latitude}</h1>
      <h1>Current user longitude:{user && user.location.longitude}</h1>
      <h1>
        Accident Happend in Banglore: latitude:{lat2} longitude:{lon2}
      </h1>
      {/* <h1>distance:{dist}KMs</h1> */}

      <Footer />
    </div>
  );
};

export default HomePage;
