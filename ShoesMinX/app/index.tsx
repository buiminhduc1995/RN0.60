import React, { PureComponent } from 'react';
import { View,Text } from 'react-native'
import AppNavigator from './navigation/'
class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <AppNavigator/>
        );
    }
}

export default App;