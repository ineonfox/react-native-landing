import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import SettingField from "./SettingField";
import ConnectedSettings from "./ConnectedSettings";
import { ScrollView } from "react-native";

export default function ProfileScreen({ navigation, route }) {
  var passwordHidden = "*".repeat(route.params.password.length);

  const onPressBackHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[
          { width: "100%", paddingLeft: 16, paddingRight: 16 },
          styles.container,
        ]}
        contentContainerStyle={styles.scrollContainer}
      >
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
        <ConnectedSettings
          items={[
            {
              text: "Privacy",
              iconUri: require("../assets/cog.png"),
              hasAction: true,
            },
            {
              text: "Terms of Services",
              iconUri: require("../assets/cog.png"),
              hasAction: true,
            },
          ]}
        />
        <ConnectedSettings
          items={[
            {
              text: "Log out",
              iconUri: require("../assets/cog.png"),
              hasAction: true,
            },
            {
              text: "Delete Account",
              iconUri: require("../assets/cog.png"),
              hasAction: true,
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
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
