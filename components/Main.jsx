import { View, ActivityIndicator, FlatList } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";

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
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
        <View
          style={{
            padding: 30,
            justifyContent: "flex-start",
          }}
        >
          <Logo />
        </View>
        <Link
          href="/about"
          style={{ color: "#ffff", fontSize: 20, padding: 20 }}
        >
          ir al About
        </Link>
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
