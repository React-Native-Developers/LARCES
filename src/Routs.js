import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import InitialPage from './components/InitialPage';
import FormLogin from './components/FormLogin';

export default Routs = () => (
    <Router>
        <Scene key='root'>
            <Scene key='initialPage' component={initialPage} title=''/>
            <Scene key='formLogin' component={FormLogin} title='Login'/>
        </Scene>
    </Router>
);