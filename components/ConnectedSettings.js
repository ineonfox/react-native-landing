import { Pressable, StyleSheet, View, Text, Image } from "react-native";

export default function ConnectedSettings(props) {
  return (
    <View style={[{ height: 65 * props.items.length }, styles.container]}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginTop: 8,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
  },
  outerRow: {
    paddingLeft: 20,
    paddingRight: 24,
    borderTopWidth: 1,
    borderTopColor: "#F5F5F5",
  },
  text: {
    fontSize: 18,
    fontFamily: "Cabin-Bold",
    color: "#2B2B2B",
    marginLeft: 8,
  },
});
