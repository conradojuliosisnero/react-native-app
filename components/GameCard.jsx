import { StyleSheet, Text, View, Image } from "react-native";
export function GameCard({ game }) {
  return (
    <>
      <View key={game.slug} styles={styles.card}>
        <Image source={{ uri: game.image }} style={styles.image} />
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.description}>{game.description}</Text>
        <Text style={styles.score}>{game.score}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {},
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
