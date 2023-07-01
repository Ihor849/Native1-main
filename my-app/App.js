import React from 'react';
import { StyleSheet,Text,View } from "react-native";
import CastomStatusBar from './component/StatusBar'
import RegistrationScreen from './component/Screens/RegistrationScreen'






const App = () => {
return ( 
  <View style={styles.container}>
    
    <RegistrationScreen/>
  </View>
  )
};
  
const styles = StyleSheet.create({
  container: {
    // fontFamily: Rob
    marginHorizontal:"auto",
    
    width: 375,
  
  },
  
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default App;