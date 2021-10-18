import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import swal from "sweetalert";

initializeAuthentication();

const useFirebase = () => {
  // states
  const [user, setUser] = useState();

  // auth and provider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        swal({
          title: "Successfully Sign In!!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      });
  };
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        swal({
          title: "Successfully Sign In!!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      });
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      });
  };

  //   create new user by email
  const createNewUserByEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {});
        swal({
          title: "Account Successfully created!!",
          text: "Please Login",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      });
  };

  //   login using email and password

  const loginWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        swal({
          title: "LogIn Successfull!!",
          icon: "success",
        });
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      });
  };

  //   observed user
  useEffect(() => {
    const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
    return unsubscirbe;
  }, [auth]);

  return {
    signInUsingGoogle,
    signInUsingGithub,
    logOut,
    user,
    createNewUserByEmail,
    loginWithEmail,
  };
};

export default useFirebase;
