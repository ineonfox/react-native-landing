import { Pressable, StyleSheet, View, Text, Image } from "react-native";

export default function SettingField(props) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.labelText} numberOfLines={1}>{props.label}</Text>
          <Text style={styles.text} numberOfLines={1}>{props.text}</Text>
        </View>
        {props.hasAction && <Image source={require('../assets/arrow_next.png')} />}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginTop: 4,
    marginBottom: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: '100%',
    marginLeft: 20,
    marginRight: 24
  },
  textContainer: {
    width: '50%'
  },
  labelText: {
    fontSize: 16,
    fontFamily: "Cabin-Bold",
    color: '#909090'
  },
  text: {
    fontSize: 18,
    fontFamily: "Cabin-Bold",
    color: '#2B2B2B',
  },
});
