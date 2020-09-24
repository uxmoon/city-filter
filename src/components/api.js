import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3030",
  params: {
    offset: 0,
    limit: 10
  }
})