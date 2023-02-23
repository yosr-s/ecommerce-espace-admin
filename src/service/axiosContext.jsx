import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
});

http.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await refreshToken();
          console.log("res of refresh : ",rs.data.data);
          const { token,refresh_token } = rs.data.data;
          console.log("token : ",token);
          console.log("refreshtoken : ",refresh_token);
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("refreshToken", refresh_token);
          http.defaults.headers.common["x_access_token"] = token;

          return http(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

function refreshToken() {

  console.log("refresh token : ",localStorage.getItem("refreshToken"));
  return http.post("/users/refresh", {
    refresh_token: localStorage.getItem("refreshToken"),
  });
}

export default http;
