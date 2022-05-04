import { StyleSheet, Image } from "react-native";

const Man = () => {
  return (
    <Image
      source={require("../../image/icons/man.png")}
      resizeMode="contain"
      style={[styles.man]}
    ></Image>
  );
};

const styles = StyleSheet.create({
  man: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});

export default Man;
