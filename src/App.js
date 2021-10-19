import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home/Home";

import Login from "./components/Login/Login/Login";
import PasswordReset from "./components/Login/PasswordReset/PasswordReset";
import SignUp from "./components/Login/SignUp/SignUp";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ServiceDetails from "./components/Services/ServiceDeatils/ServiceDetails";

import AuthProvider from "./context/AuthProvider";
import DataProvider from "./context/DataProvider";

import "animate.css";
import Services from "./components/Services/Services/Services";
import About from "./components/About/About/About";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* auth provider context */}
      <AuthProvider>
        {/* data provider context  */}
        <DataProvider>
          {/* router  */}
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute exact path="/services">
                <Services></Services>
              </PrivateRoute>
              <PrivateRoute exact path="/services/:serviceId">
                <ServiceDetails></ServiceDetails>
              </PrivateRoute>
              <PrivateRoute exact path="/about">
                <About></About>
              </PrivateRoute>
              <PrivateRoute exact path="/contact">
                <Contact></Contact>
              </PrivateRoute>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/signup">
                <SignUp></SignUp>
              </Route>
              <Route exact path="/reset">
                <PasswordReset></PasswordReset>
              </Route>
              <Route path="*">
                <PageNotFound></PageNotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </DataProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
