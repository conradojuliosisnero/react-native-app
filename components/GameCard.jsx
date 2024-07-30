import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";
import { Score } from "./Score";

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <View style={styles.texts}>
        <Text style={styles.title}>{game.title}</Text>
        <Score score={game.score} maxScore="100" />
        <Text style={styles.description}>{game.description.slice(0, 100)}</Text>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
    flexDirection: "row",
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  texts: {
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
    marginTop: 10,
  }
});
