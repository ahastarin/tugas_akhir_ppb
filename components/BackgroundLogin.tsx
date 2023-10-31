import { StyleSheet, View, Text } from "react-native";

export default function BackgroundLogin() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",

        backgroundColor: "#062148",
      }}
    >
      <View style={styles.biruAtas} />
    </View>
  );
}
const styles = StyleSheet.create({
  biruAtas: {
    height: "30%",
    width: "100%",
    backgroundColor: "#0C3358",
    borderBottomLeftRadius: 2000,
    borderBottomRightRadius: 2000,
  },
});
