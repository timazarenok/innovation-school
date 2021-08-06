import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import AboutUs from './components/about-us';
import CenterAddEducation from './components/center-add-education';
import Kindergarten from './components/kindergarten';
import PrimarySchool from './components/primary-school';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/center-add-education" component={CenterAddEducation} />
        <Route path="/kindergarten" component={Kindergarten} />
        <Route path="/primary-school" component={PrimarySchool} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;