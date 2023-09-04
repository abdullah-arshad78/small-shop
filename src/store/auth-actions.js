import { uiActions } from "./uiSlice";
import { authActions } from "./authSlice";

export const sendUserdata = (data) => {
  return async (dispatch) => {
    const userDataHandler = async () => {
      dispatch(
        uiActions.changeNotification({
          status: "Pending",
          message: "Sending User Data",
        })
      );
      let url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD1S_0cQ0URaWcsJrXuCWULF3vldi2_RxQ";
      const bodyObj = {
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      };
      if (data.type === "login") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD1S_0cQ0URaWcsJrXuCWULF3vldi2_RxQ";
      }
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(bodyObj),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Sending data failed");
      }
      dispatch(
        uiActions.changeNotification({
          status: "Success",
          message: "Successfully submitted the data",
        })
      );
      const obtainedData = await response.json();
      return obtainedData;
    };

    try {
      const userInfo = await userDataHandler();
      const { idToken } = userInfo;
      // const isTokenPresent = localStorage.getItem("token").trim().length > 1;
      // const isExpiration = localStorage.getItem("expiration").trim().length > 1;
      // if (isTokenPresent) {
      //   localStorage.removeItem("token");
      // }
      // if (isExpiration) {
      //   localStorage.removeItem("expiration");
      // }

      localStorage.setItem("token", idToken);
      const expiration = new Date();

      expiration.setHours(expiration.getHours() + 1);

      localStorage.setItem("expiration", expiration.toISOString());

      dispatch(authActions.login({ token: idToken }));
      dispatch(uiActions.resetNotification());
    } catch (error) {
      dispatch(
        uiActions.changeNotification({
          status: "Error",
          message: error.message,
        })
      );
    }
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    dispatch(authActions.logout());
  };
};
