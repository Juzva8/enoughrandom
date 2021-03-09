import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'






import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />      
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
      </Switch>

      <Footer />
    </Router>

  );
    }
export default App;
