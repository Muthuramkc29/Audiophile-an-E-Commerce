import axios from "axios";

export default axios.create({
  baseURL: "https://audiophile-django-backend-api.herokuapp.com/api/",
});
