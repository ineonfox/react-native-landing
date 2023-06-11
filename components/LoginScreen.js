import { View, Text, Image, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, Dimensions, Button } from 'react-native';
import InputField from './InputField';
import DropdownField from './DropdownField';
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
                <View style={styles.loginTopContainer}>
                    <BouncyCheckbox   
                        size={25}
                        fillColor="#FFFFFF"
                        unfillColor="#FFFFFF"
                        text="Ricordami"
                        checkIconImageSource={require('../assets/check.png')}
                        iconStyle={{ borderRadius: 5 }}
                        innerIconStyle={{ borderColor: "#C7C7C7", borderWidth: 2, borderRadius: 5 }}
                        textStyle={{ fontFamily: "Cabin-SemiBold", textDecorationLine: "none", color: '#2b2b2b', marginLeft: -9 }}
                        onPress={(isChecked) => {}}
                    />
                    <Text style={styles.text}>Password dimenticata?</Text>
                </View>
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
  },
  loginTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
    width: Dimensions.get('window').width - 32,
  },
  text: {
    fontFamily: "Cabin-SemiBold",
    color: '#00608A',
    textDecorationLine: 'underline',
    fontSize: 16,
  }
});