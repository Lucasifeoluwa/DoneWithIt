import { useState } from "react";

export default useApi = (apiFunc) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    console.log("i am geting listings");
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return response;
    }
    console.log("I got listings");
    setError(false);
    setData(response.data);
    return response;
  };
  return { data, error, loading, request };
};
