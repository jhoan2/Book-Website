import React from 'react';
import Landingpage from './components/views/Landingpage';
import Login from './components/views/Login';
import { Route, Switch } from "react-router-dom";
import Signup from './components/views/Signup';

const App = () => {
    
    return (
        <div>
            <Switch>
                <Route path='/signup'><Signup /></Route>
                <Route path='/login'><Login /></Route>
                <Route path='/'><Landingpage /></Route>
            </Switch>

        </div>

    )};


export default App;