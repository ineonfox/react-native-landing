import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Image,
  Pressable,
} from "react-native";
import SettingField from "./SettingField";

export default function ProfileScreen({ navigation, route }) {
  var passwordHidden = '*'.repeat(route.params.password.length);

  const onPressBackHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView
      style={[{ marginLeft: 16, marginRight: 16 }, styles.container]}
    >
      <View style={[{ width: "100%" }, styles.container]}>
        <Pressable style={styles.row} onPress={onPressBackHandler}>
          <Image source={require("../assets/arrow_back.png")} />
          <Text style={[{ marginLeft: 16 }, styles.text]}>
            Account Settings
          </Text>
        </Pressable>
        <SettingField hasAction label="Email" text={route.params.email} />
        <SettingField hasAction label="Change Password" text={passwordHidden} />
        <SettingField label="Country Settings" text={route.params.country} />
        <SettingField hasAction label="Language" text="English (UK)" />
        <Text style={[styles.legalLabel, styles.text]}>Legal</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 29,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: "Cabin-Bold",
  },
  legalLabel: {
    marginTop: 24,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
});
