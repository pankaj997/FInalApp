import { LOGIN } from "./actionType.js";
const intialState = {
  users: [
    {
      id: 1,
      name: "Pankaja Priya",
      username: "Priya",
      password: "Priya",
      email: "pankajapriya@gmail.com",
      address: {
        street: "Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7339625629",
      website: "rockstar.org"
    },
    {
      id: 2,
      name: "Francho Xavier",
      username: "francho",
      password: "francho",
      email: "francho@gmail.com",
      address: {
        street: "Ghandhi Street",
        city: "Tirunelveli",
        zipcode: "627015"
      },
      phone: "7339625689",
      website: "randyorton.org"
    },
    {
      id: 3,
      name: "Ranjan Surya",
      username: "Ranjan",
      password: "Ranjan",
      email: "ranjan@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "73396263858",
      website: "lusu.org"
    },
    {
      id: 4,
      name: "Ramasamy",
      username: "Ramu",
      password: "Ramu",
      email: "ramu@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "73264809",
      website: "daddy.org"
    },
    {
      id: 5,
      name: "Shanthi",
      username: "Shanthi",
      password: "Shanthi",
      email: "santhi@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7537683629",
      website: "something.org"
    },
    {
      id: 6,
      name: "Tresa Naomi",
      username: "Tresa",
      password: "Tresa",
      email: "pankajapriya@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7337825629",
      website: "whatever.org"
    },
    {
      id: 7,
      name: "Aarthi",
      username: "63",
      password: "63",
      email: "aarthi@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7339625629",
      website: "rockstar.org"
    },
    {
      id: 8,
      name: "Sujitha",
      username: "suji",
      password: "suji",
      email: "suji@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7339625629",
      website: "rockstar.org"
    },
    {
      id: 9,
      name: "Prakati",
      username: "Praki",
      password: "Praki",
      email: "praki@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7339625629",
      website: "rockstar.org"
    },
    {
      id: 10,
      name: "Maya",
      username: "maya",
      password: "maya",
      email: "pankajapriya@gmail.com",
      address: {
        street: "22,Lakshmipuram",
        city: "Tirunelveli",
        zipcode: "627011"
      },
      phone: "7339625629",
      website: "rockstar.org"
    }
  ]
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state;
    default:
      return state;
  }
};
export default reducer;
