import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Navigate to Home screen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>Login Form</Text>
      <TextInput style = {styles.input} placeholder = 'Email' />
      <TextInput style = {styles.input} placeholder = 'Password' securityTextEntry/>
      <TouchableOpacity onPress = {handleLogin} style = {styles.button}><Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  title:{
    fontSize:32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:24
  },
  input:{
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom : 16
  },
  buttonText:{
    color: '#fff',
    fontSize : 18,
    fontWeight: bold
  },
  button:{
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,

  }
});
export default App;