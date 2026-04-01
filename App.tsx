import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import { ConfigCatProvider } from "configcat-react";
import Banner from "./components/Banner";
import Signup from "./components/Signup";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <ConfigCatProvider
      sdkKey="_YOUR_CONFIGCAT_SDK_KEY_HERE_"
      options={{ pollIntervalSeconds: 10 }}
    >
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <ScrollView>
          <View style={styles.container}>
            <Banner />
            <Signup />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ConfigCatProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
