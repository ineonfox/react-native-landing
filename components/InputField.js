import { useState } from "react";
import { View, Image, StyleSheet, TextInput, Pressable } from "react-native";
import StylesData from "./style/StylesData";
import AppStyles from "./style/AppStyles";

export default function InputField(props) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(props.isPassword);
  const passwordHidden = require("../assets/password_eye.png");
  const passwordOpen = require("../assets/password_eye_open.png");

  return (
    <View>
      <TextInput
        style={styles.input}
        inputMode={props.valueType}
        placeholder={props.placeholder}
        placeholderTextColor="#888"
        keyboardType="ascii-capable"
        secureTextEntry={isPasswordSecure}
        textContentType={props.contentType}
        onChangeText={props.onChangeText}
      />
      {props.isPassword && (
        <Pressable
          style={styles.passwordIcon}
          onPress={() => setIsPasswordSecure(!isPasswordSecure)}
        >
          <Image source={isPasswordSecure ? passwordHidden : passwordOpen} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    ...AppStyles.text,
    padding: 10,
    backgroundColor: "#FFF",
    width: StylesData.appWidth,
    height: StylesData.elementHeight,
    borderRadius: StylesData.borderRadius,
    marginBottom: 8,
    marginTop: 0,
    paddingLeft: 25,
  },
  passwordIcon: {
    position: "absolute",
    right: 22,
    top: 18,
  },
});
