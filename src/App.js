import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import ConsentForms from './Pages/ConsentForms/ConsentForms'
import Contact from './Pages/Contact/Contact'
import Haircut from './Pages/Haircut/Haircut'
import Makeup from './Pages/Makeup/Makeup'
import Brows from './Pages/Brows/Brows'
import Nails from './Pages/Nails/Nails'
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
        <Route path='/consent-forms' component={ConsentForms} />   
        <Route path='/contact' component={Contact} />
        <Route path='/haircut' component={Haircut} />
        <Route path='/makeup' component={Makeup} />
        <Route path='/brows' component={Brows} />
        <Route path='/nails' component={Nails} />
      </Switch>

      <Footer />
    </Router>

  );
    }
export default App;
