import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated, Pressable } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";

export function GameCard({ game }) {
  return (
    <Link asChild href={`/${game.slug}`}>
      <Pressable>
        {({ pressed }) => (
          <View key={game.slug} style={[styles.card, pressed && styles.pressed]}>
            <Image source={{ uri: game.image }} style={styles.image} />
            <View style={styles.texts}>
              <Text style={styles.title}>{game.title}</Text>
              <Score score={game.score} maxScore="100" />
              <Text style={styles.description}>
                {game.description.slice(0, 100)}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
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
    flexDirection: "row",
    backgroundColor: "#1a1a1e",
    padding: 15, 
    borderRadius: 10,
    margin: 15,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  texts: {
    flexShrink: 1,
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
  },
  pressed: {
    opacity: 0.5,
    backgroundColor: "#333333",
    transform: [{ scale: 0.98 }],
  },
});
