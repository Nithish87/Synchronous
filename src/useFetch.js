import { useState, useEffect } from "react";

//import dynamic url
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  console.log(url);
  useEffect(() => {
    //To cleanup
    const abortCont = new AbortController();
    //Runs for render
    console.log("Use effect ran");
    //Second argument is to link an abort contoller
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        console.log("res");
        //Is the response not ok
        if (!res.ok) {
          //Throws the erro message
          throw Error("Couldn't fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data");
        //console.log(data);
        //Set blogs to data
        setData(data);
        //Remove loading message
        setIsPending(false);
        //Set error to null
        setError(null);
      })
      //res doesn't have data
      .catch((err) => {
        console.log("error");
        if (err.name == "AbortError") {
          console.log("Fetch Aborted");
        } else {
          //Set error message
          setError(err.message);
          //Remove loading when error
          setIsPending(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);
  //url is a dependency, reloads evrytime url changes

  //Data to be returned from useFetch
  //console.log(data);
  return { data, isPending, error };
};

export default useFetch;
