import { StyleSheet, Image } from "react-native";

const Female = () => {
  return (
    <Image
      source={require("../../image/icons/woman.png")}
      resizeMode="contain"
      style={[styles.female]}
    ></Image>
  );
};

const styles = StyleSheet.create({
  female: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

export default Female;
