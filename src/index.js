import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link,IndexRoute,browserHistory} from 'react-router'
import App from './App';

import Award from "./component/Award.js"
import Home from "./component/Home.js"
import Challenge from "./component/Challenge.js"
import Lab from "./component/Lab.js"
import Newsnotice from "./component/Newsnotice.js"
import Plan from "./component/Plan.js"
import Productlist from "./component/Productlist.js"
import Store from "./component/Store.js"
import Thanks from "./component/Thanks.js"


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="award" component={Award}/>
            <Route path="challenge" component={Challenge}/>
            <Route path="lab" component={Lab}/>
            <Route path="plan" component={Plan}/>
            <Route path="newsnotice" component={Newsnotice}/>
            <Route path="productlist" component={Productlist}/>
            <Route path="store" component={Store}/>
            <Route path="thanks" component={Thanks}/>
        </Route>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();