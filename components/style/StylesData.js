import { Dimensions } from "react-native";

export default AppStyles = {
  color: {
    background: "#F5F5F5",
    mainFont: "#2B2B2B",
    secondaryFont: "#909090",
    placeholder: "#888888",
    primary: "#2AA9E1",
    secondary: "#00608A",
  },
  fontSize: {
    standard: 16,
    big: 18,
    bigger: 20,
    huge: 24,
  },
  fontFamily: {
    semibold: "Cabin-SemiBold",
    bold: "Cabin-Bold",
  },
  appWidth: Dimensions.get("window").width - 32,
  borderRadius: 10,
  elementHeight: 54,
  elementHeightBigger: 65,
};
