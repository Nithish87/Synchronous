import Footer from "./Footer";
import EventsMenu from "./EventsMenu";
import SearchBar from "./SearchBar";
import useFetch from "./useFetch";
import { useContext, useEffect, useState } from "react";
import content from "./data";
import { AuthContext } from "./backend/Auth";
import { get, child, ref } from "firebase/database";
import { db } from "./backend/firebase-config";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Geocode from "react-geocode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import EventsList from "./EventsList";
import { getDistance, getPreciseDistance } from "geolib";
//import { getUsers } from "./backend/getAccidents";
const HomePage = () => {
  Geocode.setApiKey("AIzaSyCJksHNqEJlMdqymtXAhPbEnrgq63y1Nd0");
  const range = 50;
  const { currentUser } = useContext(AuthContext);
  const [user, setuser] = useState(null);
  const [events, setEvents] = useState(null);
  const accidents = [];
  console.log(user);
  console.log(events);
  const dbRef = ref(db);
  const getEvents = () => {
    get(dbRef).then((snapshot) => {
      setEvents(snapshot.child("GPS").val());
    });
  };
  // const {
  //   data: events,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/events");

  const getUsers = async () => {
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

  const calculateDistance = () => {
    content.forEach((item) => {
      var dis = getDistance(
        {
          latitude: user.location.latitude,
          longitude: user.location.longitude,
        },
        {
          latitude: item.location.lattitude,
          longitude: item.location.longitude,
        }
      );

      if (dis / 1000 < range) {
        console.log(dis / 1000, range);
        displayAccidents(item.location.lattitude, item.location.longitude);
        const accident = {
          url: item.link,
          location: {
            latitude: item.location.lattitude,
            longitude: item.location.longitude,
          },
        };
        // console.log(accident);
        // //console.log(accidents);
        // //const updatedAccidents = { ...accidents, ...accident };
        // //console.log(updatedAccidents);
        // const updatedAccidents = [...accidents];
        // console.log(updatedAccidents);
        // updatedAccidents.push(accident);
        // setAccidents(updatedAccidents);
        accidents.push(accident);
      }
    });
    console.log(accidents);
  };
  const displayAccidents = (lat, long) => {
    console.log(lat, long);
    Geocode.fromLatLng(lat, long).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let city, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        console.log(city, state, country);
        console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
  };
  useEffect(() => {
    //getEvents();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {
    //calculateDistance();
  }, []);
  return (
    <div className='home'>
      <SearchBar />
      {/* <div className='events'>
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {events && <EventsList events={events} title='' />}
      </div> */}
      {}
      <button onClick={calculateDistance}>getDistance</button>
      <Footer />
    </div>
  );
};

export default HomePage;
