import { View, ActivityIndicator, FlatList, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import { HomeIcon } from "./Icons";

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
          asChild
          href="/about"
          style={{ color: "#ffff", fontSize: 20, padding: 20 }}
        >
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
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
