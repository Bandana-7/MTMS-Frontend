// import { API } from "../../backend";

 const api = process.env.BACKEND;

export const signup = (user) => {
  console.log(user);
  console.log("api = ",api);
  return fetch(`http://localhost:3001/api/users/signup/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signin = (user) => {
  console.log(user + "SIGNIN AT LINE 22");
  return fetch(`http://localhost:3001/api/users/login/`,{
  method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const authentication = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};
