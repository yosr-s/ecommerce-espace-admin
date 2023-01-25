import axios from 'axios';

 const http = axios.create({
  baseURL: "http://localhost:3000",
});

http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    const refreshtoken = localStorage.getItem("refreshtoken");
    if (token) {
      config.headers.x_access_token = token;
    }
  {/*}  if (refreshtoken) {
      config.body.refresh_token = refreshtoken;
    }*/}
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http