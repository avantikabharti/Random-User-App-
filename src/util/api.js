import axios from "axios";

export const fetchData = () => {
  try {
    return axios
      .get("https://randomuser.me/api/0.8/?results=")
      .then(res => res.data.results[0].user);
  } catch (e) {
    console.log(e);
  }
};
