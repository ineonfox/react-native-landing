import { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";

export default function InputField(props) {
  const [isPasswordSecure, setIsPasswordSecure] = useState(props.isPassword);

  return (
    <View>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        inputMode={props.valueType}
        placeholder={props.placeholder}
        placeholderTextColor="#888"
        keyboardType="ascii-capable"
        secureTextEntry={isPasswordSecure}
        textContentType={props.contentType}
      />
      {props.isPassword ? (
        <Pressable
          style={styles.passwordIcon}
          onPress={() => setIsPasswordSecure(!isPasswordSecure)}
        >
          <Image source={require("../assets/password_eye.png")} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    //   margin: 12,
    padding: 10,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width - 32,
    height: 54,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 0,
    fontFamily: "Cabin-SemiBold",
    paddingLeft: 25,
  },
  passwordIcon: {
    position: "absolute",
    right: 22,
    top: 18,
  },
});
