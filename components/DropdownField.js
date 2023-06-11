import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import StylesData from "./style/StylesData";
import AppStyles from "./style/AppStyles";

export default function DropdownField(props) {
  const [isComboboxOpen, setIsComboboxOpen] = useState(false);
  const [chosen, setChosen] = useState();

  const onPressHandler = (e, value) => {
    setChosen(value);
    setIsComboboxOpen(false);

    props.onSelect(e, value);
  };

  return (
    <View
      style={[
        { height: isComboboxOpen ? props.options.length * 56 + 54 : 54 },
        isComboboxOpen && styles.selectOpened,
        styles.container,
        props.style,
      ]}
    >
      <Pressable
        style={styles.mainContainer}
        onPress={() => setIsComboboxOpen(!isComboboxOpen)}
      >
        <Text
          style={[styles.containerText, { color: chosen ? "#000" : "#888" }]}
        >
          {chosen ? chosen : props.placeholder}
        </Text>
        <Image
          style={isComboboxOpen && { transform: [{ rotate: "180deg" }] }}
          source={require("../assets/arrow_down.png")}
        />
      </Pressable>
      {props.options.map((val, i) => {
        return (
          <Pressable
            key={i}
            style={[
              { display: isComboboxOpen ? "flex" : "none" },
              styles.selectOption,
            ]}
            onPress={(e) => onPressHandler(e, val.name)}
          >
            <Image style={styles.selectImage} source={val.uri} />
            <Text style={styles.containerText}>{val.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: StylesData.appWidth,
    borderRadius: StylesData.borderRadius,
    marginBottom: 8,
    marginTop: 0,
  },
  mainContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: StylesData.elementHeight,
    borderBottomWidth: 1,
    borderColor: "#f5f5f5",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
  },
  containerText: {
    ...AppStyles.text,
    color: StylesData.color.placeholder,
  },
  selectOption: {
    height: StylesData.elementHeight,
    borderTopWidth: 1,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
    borderColor: "#f5f5f5",
    flexDirection: "row",
  },
  selectImage: {
    marginRight: 12,
  },
  selectOpened: {
    shadowOffset: { height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

DropdownField.defaultProps = {
  options: ["Italia", "Francia", "Germania"],
};
