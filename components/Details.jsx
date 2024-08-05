import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Image,
} from "react-native";
import { Screen } from "./Screen";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "./Score";

export function Details() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "#000",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: `${gameslug}`,
        }}
      />

      <View style={styles.container}>
        <View>
          {gameInfo === null ? (
            <ActivityIndicator size="large" color={"#fff"} />
          ) : (
            <ScrollView>
              <View style={styles.imageContainer}>
                <Image source={{ uri: gameInfo.img }} style={styles.image} />
                <Text style={styles.text}>Título: {gameInfo.title}</Text>
                <Score score={gameInfo.score} maxScore={100} />
                <Text style={styles.description}>{gameInfo.description}</Text>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  description: {
    color: "#333f50",
    marginTop: 20,
    fontSize: 20,
    lineHeight: 25,
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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  image: {
    width: 214,
    height: 294,
    borderRadius: 10,
    marginBottom: 10,
  },
});
