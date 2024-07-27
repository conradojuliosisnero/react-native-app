import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://somoskudasai.com/wp-content/uploads/2023/11/portada_jujutsu-kaisen-188.jpg",
        }}
        width={250}
        height={350}
      />
      <Text style={styles.title}>Home view!</Text>
      <Button title="pulsa aqui" onPress={() => alert("puto")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#ffffff",
  },
});
