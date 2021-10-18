
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Pages/Nav/Nav';
import Slider from './Pages/Slider/Slider';
import Services from './Pages/Service/Home/Services';
import Footer from './Pages/Footer/Footer';
import SingleService from './Pages/Service/SingleService';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';


function App() {
  return (
    <div className="App">
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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
