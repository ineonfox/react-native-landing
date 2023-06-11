import { Pressable, StyleSheet, View, Text, Image } from "react-native";
import StylesData from "./style/StylesData";
import AppStyles from "./style/AppStyles";

export default function ConnectedSettings(props) {
  return (
    <Pressable
      style={[
        { height: StylesData.elementHeightBigger * props.items.length },
        styles.container,
      ]}
      onPress={props.onPress}
    >
      {props.items.map((val, i) => {
        return (
          <View style={[styles.row, styles.outerRow]} key={i}>
            <View style={styles.row}>
              <Image source={val.iconUri} />
              <Text style={styles.text} numberOfLines={1}>
                {val.text}
              </Text>
            </View>
            {val.hasAction && (
              <Image source={require("../assets/arrow_next.png")} />
            )}
          </View>
        );
      })}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: StylesData.borderRadius,
    backgroundColor: "#FFF",
    marginTop: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: StylesData.elementHeightBigger,
  },
  outerRow: {
    paddingLeft: 20,
    paddingRight: 24,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
  },
  text: {
    ...AppStyles.textBig,
    marginLeft: 8,
  },
});
