import { ConfigCatProvider } from "configcat-react";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from "./components/Banner";
import Signup from "./components/Signup";

export default function App() {
  return (
    <ConfigCatProvider
      sdkKey="YOUR-SDK-KEY"
      options={{ pollIntervalSeconds: 10 }}
    >
      <SafeAreaView style={styles.safeAreaContainer}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Banner />
            <Signup />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ConfigCatProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: "flex",
    height: "100%",
  },

  container: {
    backgroundColor: "#fff",
    marginTop: "auto",
    marginBottom: "auto",
  },
});
