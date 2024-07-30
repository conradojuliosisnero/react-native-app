import { Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
export default function About() {
  return (
    <ScrollView>
      <Link href="/" style={{ color: "blue", fontSize: 20, padding: 20 }}>
        ir al Home
      </Link>
      <Text style={styles.title}>About</Text>
      <Text style={styles.text}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est labor
      </Text>
    </ScrollView>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },
  text: {
    color: "#fff",
  }
});
