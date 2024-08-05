import { StyleSheet, View, Text, ViewBase } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "./Screen";

export function Details() {
  const { gameslug } = useLocalSearchParams();

  return (
    <Screen>
      <View style={styles.container}>
        <View>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 30 }}>
            Detalle del Juego
          </Text>
          <Text style={styles.title}>{gameslug}</Text>
          <Text style={styles.text}>description</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
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
  link: {
    color: "blue",
    fontSize: 20,
    padding: 20,
  },
});
