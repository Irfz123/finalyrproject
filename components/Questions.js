import { useState } from "react";
import ThumbsUp from "./icons/ThumbsUp";
import ThumbsDown from "./icons/ThumbsDown";
import Man from "./icons/Man";
import Female from "./icons/Female";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Questions = ({ item, selectedQuestion, maleOrFemale }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isMale, setIsMale] = useState(false);

  const handleClick = (item) => {
    setIsChecked(!isChecked);
    item.q === "Sex" ? setIsMale(!isMale) : null
    item.q === "Sex" ? maleOrFemale(isMale) : null
    selectedQuestion(item);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={{ fontSize: 20, color: "#ba55d3", fontWeight: "bold" }}>
          {item.q}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleClick(item)}>
          {item.q === "Sex" ? isChecked ? <Female /> : <Man /> : isChecked ? <ThumbsUp /> : <ThumbsDown />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    width: 330,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginLeft: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    marginTop: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Questions;
