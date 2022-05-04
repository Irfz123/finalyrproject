import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Questions from "../components/Questions";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

function CovidCheck({ navigation }) {
  const [checkedQuestions, setCheckedQuestions] = useState([]);
  const [isMale, setIsMale] = useState(true);
  const [isPositve, setIsPositive] = useState(true);

  const number = ["1", "2", "3", "4", "5", "6", "7"];
  const question = [
    {
      id: "asdfsf3",
      q: "Sex",
    },
    {
      id: "3ed2g3",
      q: "Age 60+",
    },
    {
      id: "sgf6fd",
      q: "Cough",
    },
    {
      id: "sfd56d",
      q: "Fever",
    },
    {
      id: "5484rg",
      q: "Sore Throat",
    },
    {
      id: "sdf68s",
      q: "Shortness of breath",
    },
    {
      id: "fkew33",
      q: "Headache",
    },
  ];

  const handleClick = async () => {
    try {
      let filteredData = [];
      checkedQuestions.map((item) => filteredData.push(item.q));
      filteredData.push(isMale ? "Gender: Male" : "Gender: Female");
      const dbCollection = collection(db, "coronaDatabase");
      await addDoc(dbCollection, { answers: filteredData });
    } catch (err) {
      console.log(err);
    }
    changePage();
  };

  const changePage = () => {
    // send submitted data to database
    // fetch the machien learning outcome
    // depending on if its positve or negative route to its page
    isPositve
      ? navigation.navigate("Positive Result")
      : navigation.navigate("Negative Result");
  };

  const renderNumbers = () =>
    number.map((item, index) => (
      <View key={index} style={styles.num}>
        <Text
          style={{
            paddingTop: 5,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {item}
        </Text>
      </View>
    ));

  const selectedQuestion = (val) => {
    const questionId = val.id;
    const index = checkedQuestions.findIndex((i) => i.id === questionId);

    if (index === -1) {
      setCheckedQuestions([...checkedQuestions, val]);
    } else {
      const filteredQuestions = checkedQuestions.filter(
        (item) => item.id !== questionId
      );
      setCheckedQuestions(filteredQuestions);
    }
  };

  const maleOrFemale = (val) => {
    setIsMale(val);
  };

  const renderQuestions = () =>
    question.map((item, index) => (
      <Questions
        key={index}
        item={item}
        selectedQuestion={selectedQuestion}
        maleOrFemale={maleOrFemale}
      />
    ));

  return (
    <ImageBackground
      source={require("../image/Night.jpg")}
      style={styles.background}
    >
      <View style={{ flexDirection: "row" }}>
        <View>{renderNumbers()}</View>
        <View>{renderQuestions()}</View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.submitBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 700,
  },
  num: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: "center",
    marginTop: 26,
    marginBottom: 15,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#D3B5E5",
  },
  submitBtn: {
    backgroundColor: "#D3B5E5",
    color: "white",
    fontWeight: "bold",
    width: 120,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginTop: 40,
    textAlign: "center",
    fontSize: 16,
  },
});

export default CovidCheck;
