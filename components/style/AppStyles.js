import { StyleSheet } from "react-native";
import StylesData from "./StylesData";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StylesData.color.background,
    alignItems: "center",
  },
  text: {
    fontSize: StylesData.fontSize.standard,
    color: StylesData.color.mainFont,
    fontFamily: StylesData.fontFamily.semibold,
  },
  textBig: {
    fontSize: StylesData.fontSize.big,
    color: StylesData.color.mainFont,
    fontFamily: StylesData.fontFamily.bold,
  },
  textBigger: {
    fontSize: StylesData.fontSize.bigger,
    color: StylesData.color.mainFont,
    fontFamily: StylesData.fontFamily.bold,
  },
  textHuge: {
    fontSize: StylesData.fontSize.huge,
    fontFamily: StylesData.fontFamily.bold,
  },
});
