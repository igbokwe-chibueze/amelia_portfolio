import { useEffect, useState } from "react";
import { client } from "../client";


const FetchData = (query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
  
    useEffect(() => {
      // Ensure query is provided before fetching data
      if (!query) {
        console.error('Query is required to fetch data.');
        return;
      }
  
      // Set pending state to true when the query changes
      //setIsPending(true);

      // Fetch data using the 'client' and update the 'data' state with the fetched data
      client.fetch(query)
      .then((fetchedData) => {
        // Data fetched successfully, update state
        setData(fetchedData);
        // Set pending state to false
        setIsPending(false);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
        // Update error state
        setError(error);
        // Set pending state to false
        setIsPending(false);
      });
  
      // // Simulate a delay using setTimeout
      // const timeout = setTimeout(() => {
      //   // Fetch data using the 'client' and update the 'data' state with the fetched data
      //   client.fetch(query)
      //     .then((fetchedData) => {
      //       // Data fetched successfully, update state
      //       setData(fetchedData);
      //       // Set pending state to false
      //       setIsPending(false);
      //     })
      //     .catch((error) => {
      //       // Handle error
      //       console.error('Error fetching data:', error);
      //       // Update error state
      //       setError(error);
      //       // Set pending state to false
      //       setIsPending(false);
      //     });
      // }, 1000); // Simulate a delay of 1 second
  
      // // Clean up function to clear the timeout if component unmounts or query changes
      // return () => clearTimeout(timeout);
      
    }, [query]);
  
    // Return the fetched data, error, and pending state
    return { data, error, isPending };
}

export default FetchData