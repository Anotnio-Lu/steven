import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactMe from './components/ContactMe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Content = () => {
   
    return (
        <div className="home">
            <Switch>
            <Route exact path='/'>
              <AboutMe />
            </Route>
            <Route path='/aboutme'>
              <AboutMe />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            <Route path='/contactme'>
              <ContactMe />
            </Route>
          </Switch>
        </div>
    );
}
 
export default Content;