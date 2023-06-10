import { View, Text, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputField from './InputField';
import DropdownField from './DropdownField';

export default function LoginScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/zepping_logo.png')}/>
                <InputField placeholder="Nome" valueType="text" contentType="givenName" />
                <InputField placeholder="Cognome" valueType="text" contentType="name" />
                <InputField placeholder="E-mail" valueType="email" contentType="emailAddress" />
                <InputField placeholder="Password" valueType="text" isPassword contentType="password" />
                <DropdownField 
                    placeholder="Nazionalità" 
                    options={[{name: "Italia", uri: require("../assets/italy.png") },
                            { name: "Francia", uri: require("../assets/france.png") }, 
                            { name: "Germania", uri: require("../assets/germany.png") }
                    ]}
                    images={["italy.png", "france.png", "germany.png"]}    
                />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 29,
    marginBottom: 46,
  }
});