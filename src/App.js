
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Pages/Nav/Nav';
import Slider from './Pages/Slider/Slider';
import Services from './Pages/Service/Home/Services';
import Footer from './Pages/Footer/Footer';
import SingleService from './Pages/Service/SingleService';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import AllService from './Pages/Service/AllService';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Slider></Slider>
              <Services></Services>
            </Route>
            <Route path="/service/:id">
              <SingleService></SingleService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/services">
              <AllService></AllService>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/appointment/:title">
              <Appointment></Appointment>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
