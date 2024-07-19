import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "78937bebd5e24c688aea873d35dda5d5",
  },
});

