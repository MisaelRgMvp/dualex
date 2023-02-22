// import { useEffect } from 'react';
// import { useAuthContext } from '../context/authContext';
// import { useDispatch } from 'react-redux';
// import { login, logout } from '../context/actions';

// const useKeepSession = () => {
//     const dispatch = useDispatch();

//   const { userInfo, loginOk } = useAuthContext();
//   useEffect(() => {
//     // check if there is a token in the local storage
//     const infoLogin =localStorage.getItem('userInfoJson');

//     if (infoLogin) {
//         const user =infoLogin && JSON.parse(infoLogin);
      
//         // set the userInfo in the state
//         loginOk(user);
//         dispatch(login(user));
//     }
//     else{
     
//     }
//   }, []);
// }

// export default useKeepSession;