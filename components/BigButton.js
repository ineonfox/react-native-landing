import { Text, StyleSheet, Dimensions, Pressable } from "react-native";
import StylesData from "./style/StylesData";
import AppStyles from "./style/AppStyles";

export default function BigButton(props) {
  return (
    <Pressable
      style={[
        { backgroundColor: props.backgroundColor },
        styles.button,
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text style={styles.text} onPress={props.onPress}>
        {props.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: StylesData.appWidth,
    borderRadius: StylesData.borderRadius,
    height: StylesData.elementHeight,
    justifyContent: "center",
  },
  text: {
    ...AppStyles.textBigger,
    color: "#fff",
    textAlign: "center",
  },
});
