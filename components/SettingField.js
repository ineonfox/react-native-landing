import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import AppStyles from "./style/AppStyles";
import StylesData from "./style/StylesData";

export default function SettingField(props) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.labelText} numberOfLines={1}>
            {props.label}
          </Text>
          <Text style={styles.text} numberOfLines={1}>
            {props.text}
          </Text>
        </View>
        {props.hasAction && (
          <Image source={require("../assets/arrow_next.png")} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: StylesData.elementHeightBigger,
    width: "100%",
    borderRadius: StylesData.borderRadius,
    backgroundColor: "#FFF",
    marginTop: 4,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    marginLeft: 20,
    marginRight: 24,
  },
  textContainer: {
    width: "50%",
  },
  labelText: {
    fontSize: StylesData.fontSize.standard,
    fontFamily: StylesData.fontFamily.bold,
    color: StylesData.color.secondaryFont,
  },
  text: AppStyles.textBig,
});
