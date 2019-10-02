import React, { PureComponent } from 'react';
import { View,Text,TouchableOpacity } from 'react-native'
class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    Abc=()=>{
        alert('abc')
    }
    render() {
        return (
            <View>
               <TouchableOpacity onPress={()=>this.Abc()}>
<Text>abc</Text>
               </TouchableOpacity>
            </View>
        );
    }
}

export default index;