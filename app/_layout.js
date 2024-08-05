import { View, StyleSheet, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { CircleIcon } from "../components/Icons";
import { Logo } from "../components/Logo";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                <CircleIcon />
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
