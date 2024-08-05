import { Text, StyleSheet, ScrollView} from "react-native";
import { Screen } from "./Screen";

export function About() {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est labor
        </Text>
      </ScrollView>
    </Screen>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 52,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    padding: 20,
  },
});
