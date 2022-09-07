import {
  middlewareServerIPAddress,
  middlewareServerPort,
} from "./apiURLandPORT";

export const doLogin = async (email, password) => {
  const response = await fetch(
    `http://${middlewareServerIPAddress}:${middlewareServerPort}/api/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
  const data = await response.json();
  console.log(data);

  if (data.status === "ok") {
    console.log("doLogin function works fine");

    try {
      sessionStorage.setItem("token", data.user);
      console.log("session storage updated");
    } catch (error) {
      console.log(error);
      console.log("smth is wrong with session storage");
    }
  } else {
    alert("wrong username or password");
  }
};
