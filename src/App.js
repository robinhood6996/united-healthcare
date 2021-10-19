
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Pages/Nav/Nav';
import Footer from './Pages/Footer/Footer';
import SingleService from './Pages/Service/SingleService';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import AllService from './Pages/Service/AllService';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import PrivateRoute from './routes/PrivateRoute';
import Faq from './Pages/Faq/Faq';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Doctors from './Pages/Doctors/Doctors';
import DoctorAppointment from './Pages/Appointment/DoctorAppointment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            {/* Home ROute */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* Single service  Route */}
            <Route path="/service/:id">
              <SingleService></SingleService>
            </Route>
            {/* Login Route */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* Signup Route */}
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            {/* Services Route */}
            <Route path="/services">
              <AllService></AllService>
            </Route>
            {/* Doctor Route */}
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            {/* Doctor Route */}
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/faq">
              <Faq></Faq>
            </Route>
            <PrivateRoute path="/appointment/:title">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/doctor/:name">
              <DoctorAppointment></DoctorAppointment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
