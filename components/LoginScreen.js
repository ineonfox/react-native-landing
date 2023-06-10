import { View, Text, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import InputField from './InputField';

export default function LoginScreen() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={require('../assets/zepping_logo.png')}/>
                <InputField placeholder="Nome" valueType="text" contentType="givenName" />
                <InputField placeholder="Cognome" valueType="text" contentType="name" />
                <InputField placeholder="E-mail" valueType="email" contentType="emailAddress" />
                <InputField placeholder="Password" valueType="text" isPassword contentType="password" />
                <InputField placeholder="Nazionalità" valueType="text" isComboBox />
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