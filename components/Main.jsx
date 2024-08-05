import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <>
      <View style={{backgroundColor: "#000"}}>
        {games.length === 0 ? (
          <View>
            <ActivityIndicator size={"large"} />
          </View>
        ) : (
          <FlatList
            data={games}
            keyExtractor={(game) => game.slug}
            renderItem={({ item, index }) => (
              <AnimatedGameCard game={item} index={index} />
            )}
          />
        )}
      </View>
    </>
  );
}
