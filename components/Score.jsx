import { View, Text, StyleSheet } from "react-native";

export function Score({ score, maxScore }) {
  const getScoreColor = () => {
    const percentage = (score / maxScore) * 100;

    if (percentage >= 75) {
      return "#00ff00";
    } else if (percentage >= 50) {
      return "#ffcc00";
    } else if (percentage >= 25) {
      return "#ff6600";
    } else {
      return "#ff0000";
    }
  };

  const className = getScoreColor();
  return (
    <View
      style={{
        backgroundColor: className,
        borderRadius: 100,
        padding: 5,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.score}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
});
