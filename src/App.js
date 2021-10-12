import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import ConsentForms from './Pages/ConsentForms/ConsentForms'
import Contact from './Pages/Contact/Contact'
import gallery from './Pages/gallery/gallery'
import Lipblush from './Pages/LipBlush/LipBlush'
import PmuBrows from './Pages/PmuBrows/PmuBrows'
import pricing from './Pages/pricing/pricing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Brand from './Components/Brand/Brand';


function App() {
  return (
    <Router>
      <Header />
      <Brand />
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/about' component={About} />   
        <Route path='/before-booking' component={ConsentForms} />   
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={gallery} />
        <Route path='/Lipblush' component={Lipblush} />
        <Route path='/PmuBrows' component={PmuBrows} />
        <Route path='/pricing' component={pricing} />
      </Switch>

      <Footer />
    </Router>

  );
    }
export default App;
