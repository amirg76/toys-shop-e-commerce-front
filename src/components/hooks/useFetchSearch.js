import { useState, useEffect } from "react";
import { API } from "../../Api/Api";

const useFetchSearch = (query = "") => {
  const [data, setData] = useState(null);

  const fetchQuery = async (query) => {
    try {
      const respnse = await API.get(`/products/search/query?name=${query}`);
      setData(respnse.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (query !== "") {
      fetchQuery(query);
    }
  }, [query]);

  return data;
};
export default useFetchSearch;
