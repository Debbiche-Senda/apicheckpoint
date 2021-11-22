import React, {useState, useEffect} from "react";
import axios from "axios";
 

const Details = (props) => {
  const id = props.match.params.id;

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);
  return <div>{!loading ? <h1>{user.name}</h1> : <h1>Please Wait for the loading</h1>}</div>;
};

export default Details;
