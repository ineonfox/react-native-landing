import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import InputField from "./InputField";
import DropdownField from "./DropdownField";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BigButton from "./BigButton";
import { useState } from "react";
import AppStyles from "./style/AppStyles";
import StylesData from "./style/StylesData";

export default function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");

  const onPressLoginHandler = () => {
    if (!name || !surname || !email || !password || !country) {
      Alert.alert(
        "Fields not filled out",
        "Please fill up all fields to login",
        [{ text: "OK" }]
      );
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    fetch("https://sicce-test.thingscloud.it/api/mobile/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          navigation.navigate("Profile", {
            name,
            surname,
            email,
            password,
            country,
          });
        } else {
          let text;
          let msg;
          if ((data.error = "INVALID_USER_OR_PASSWORD")) {
            text = "Invalid E-mail or Password";
            msg =
              'Please, enter correct E-mail and password or press "Password dimenticata?" button';
          } else {
            text = "Error";
            msg = "Something went wrong. Please, try again later.";
          }

          Alert.alert(text, msg, [{ text: "OK" }]);
        }
      });
  };

  const onNameChangeHandler = (value) => {
    setName(value);
  };

  const onSurnameChangeHandler = (value) => {
    setSurname(value);
  };

  const onEmailChangeHandler = (value) => {
    setEmail(value);
  };

  const onPasswordChangeHandler = (value) => {
    setPassword(value);
  };

  const onCountrySelectHandler = (e, value) => {
    setCountry(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../assets/zepping_logo.png")}
          />
          <InputField
            placeholder="Nome"
            valueType="text"
            contentType="givenName"
            onChangeText={onNameChangeHandler}
          />
          <InputField
            placeholder="Cognome"
            valueType="text"
            contentType="name"
            onChangeText={onSurnameChangeHandler}
          />
          <InputField
            placeholder="E-mail"
            valueType="email"
            contentType="emailAddress"
            onChangeText={onEmailChangeHandler}
          />
          <InputField
            placeholder="Password"
            valueType="text"
            isPassword
            contentType="password"
            onChangeText={onPasswordChangeHandler}
          />
          <DropdownField
            style={styles.dropdownNationality}
            placeholder="Nazionalità"
            options={[
              { name: "Italia", uri: require("../assets/italy.png") },
              { name: "Francia", uri: require("../assets/france.png") },
              { name: "Germania", uri: require("../assets/germany.png") },
            ]}
            images={["italy.png", "france.png", "germany.png"]}
            onSelect={onCountrySelectHandler}
          />
          <View style={styles.loginTopContainer}>
            <BouncyCheckbox
              size={25}
              fillColor="#FFFFFF"
              unfillColor="#FFFFFF"
              text="Ricordami"
              checkIconImageSource={require("../assets/check.png")}
              iconStyle={{ borderRadius: 5 }}
              innerIconStyle={{
                borderColor: "#C7C7C7",
                borderWidth: 2,
                borderRadius: 5,
              }}
              textStyle={{
                fontFamily: "Cabin-SemiBold",
                textDecorationLine: "none",
                color: "#2b2b2b",
                marginLeft: -9,
              }}
              onPress={(isChecked) => {}}
            />
            <Text style={styles.textPassword}>Password dimenticata?</Text>
          </View>
          <BigButton
            title="Login"
            backgroundColor="#2AA9E1"
            style={{ marginTop: 29 }}
            onPress={onPressLoginHandler}
          />
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={styles.text}>Non hai un account?</Text>
          <BigButton
            title="Registrati"
            backgroundColor="#00608A"
            style={{ marginTop: 24 }}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    ...AppStyles.container,
    justifyContent: "flex-start",
    marginTop: 29,
  },
  logo: {
    marginBottom: 46,
  },
  loginTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 75,
    width: StylesData.appWidth,
  },
  textPassword: {
    ...AppStyles.text,
    color: "#00608A",
    textDecorationLine: "underline",
  },
  text: {
    ...AppStyles.textBig,
    textAlign: "center",
  },
  dropdownNationality: {
    position: "absolute",
    top: 356,
    zIndex: 1,
  },
});
