import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
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
  };
};

export default useFirebase;
