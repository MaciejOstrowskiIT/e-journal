// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const useCheckToken = () => {
//   let navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       const user = jsonwebtoken.decode(token);
//       if (!user) {
//         localStorage.removeItem("token");
//         navigate("/login");
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }, []);
// };

// export default useCheckToken;
