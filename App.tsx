import React from 'react';

import { Provider } from 'react-redux';
import StackNavigator from './app/navs/StackNavigator/Index';
import store from './app/redux/store';
import Index from './app/screens/Index';

const App = () => {
    return (
        <>
            <Provider store={ store } >
                <StackNavigator></StackNavigator>
                {/* <Index/> */}
            </Provider>
        </>
    )
}

export default App;
