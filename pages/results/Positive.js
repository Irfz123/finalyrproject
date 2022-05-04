import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import CustomModal from "../../components/Modal";

function Positive({ navigation }) {
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  const modalStatus1 = (val) => {
    setModalVisible1(val);
  };

  const modalStatus2 = (val) => {
    setModalVisible2(val);
  };
  const modalStatus3 = (val) => {
    setModalVisible3(val);
  };
  const modalStatus4 = (val) => {
    setModalVisible4(val);
  };

  return (
    <ImageBackground
      source={require("../../image/Night.jpg")}
      style={styles.background}
    >
      <View style={styles.Result}>
        <Text style={{ marginTop: 30, fontSize: 17 }}>
          Yes, you are exhibiting Covid-19 symptoms
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "red" }}>
          Severity: Severe
        </Text>
      </View>
      <View style={styles.bordercontainer}>
        <Text style={styles.title}>Advice</Text>
      </View>

      <View style={styles.Container}>
        <View style={styles.FirstBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible1(true)}
          >
            <Text
              style={{
                color: "#ba55d3",
                fontWeight: "bold",
                textDecorationLine: "underline",
                fontSize: 17,
              }}
            >
              Feeling breathless
            </Text>

            <CustomModal
              modalStatus={modalStatus1}
              modalVisible={modalVisible1}
              title="Feeling breathless"
              data={[
                {
                  key: "breathing slowly in through your nose and out through your mouth, with your lips together like you're gently blowing out a candle",
                },
                { key: "sitting upright in a chair" },
                { key: "relaxing your shoulders, so you're not hunched" },
                {
                  key: "leaning forward slightly – support yourself by putting your hands on your knees or on something stable like a chair",
                },
              ]}
            />
          </Pressable>
        </View>

        <View style={styles.SecBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible2(true)}
          >
            <Text
              style={{
                color: "#ba55d3",
                fontWeight: "bold",
                textDecorationLine: "underline",
                fontSize: 17,
              }}
            >
              Treating cough
            </Text>

            <CustomModal
              modalStatus={modalStatus2}
              modalVisible={modalVisible2}
              title="Treating cough"
              data={[
                {
                  key: "If you have a cough, it's best to avoid lying on your back. Lie on your side or sit upright instead.",
                },
                {
                  key: "To help ease a cough, try having a teaspoon of honey. But do not give honey to babies under 12 months.",
                },
                {
                  key: "If this does not help, you could contact a pharmacist for advice about cough treatments",
                },
              ]}
            />
          </Pressable>
        </View>
        <View style={styles.ThirdBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible3(true)}
          >
            <Text
              style={{
                color: "#ba55d3",
                fontWeight: "bold",
                textDecorationLine: "underline",
                fontSize: 17,
              }}
            >
              Treating a high temperature
            </Text>

            <CustomModal
              modalStatus={modalStatus3}
              modalVisible={modalVisible3}
              title="Treating a high temperature"
              data={[
                {
                  key: "get lots of rest",
                },
                {
                  key: "drink plenty of fluids (water is best) to avoid dehydration – drink enough so your pee is light yellow and clear",
                },
                {
                  key: "take paracetamol or ibuprofen if you feel uncomfortable",
                },
              ]}
            />
          </Pressable>
        </View>
        <View style={styles.FourthBox}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible4(true)}
          >
            <Text
              style={{
                color: "#ba55d3",
                fontWeight: "bold",
                textDecorationLine: "underline",
                fontSize: 17,
              }}
            >
              {" "}
              Get advice from NHS 111 or a GP{" "}
            </Text>

            <CustomModal
              modalStatus={modalStatus4}
              modalVisible={modalVisible4}
              title=" Urgent advice: Get advice from NHS 111 or a GP if: "
              data={[
                {
                  key: "you're feeling gradually more unwell or more breathless",
                },
                {
                  key: "you have difficulty breathing when you stand up or move around",
                },
                {
                  key: "you feel very weak, achy or tired",
                },
                {
                  key: "you're shaking or shivering",
                },
                {
                  key: "you've lost your appetite",
                },
                {
                  key: "you're unable to care for yourself – for example, tasks like washing and dressing or making food are too difficult",
                },
              ]}
            />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 700,
  },
  title: {
    textAlign: "center",
    marginTop: 28,
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  bordercontainer: {
    borderWidth: 2,
    width: 80,
    marginTop: 5,
    alignSelf: "center",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#ba55d3",
  },
  Result: {
    width: 350,
    height: 100,
    marginTop: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: "white",
    alignItems: "center",
  },
  Container: {
    width: 350,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  FirstBox: {
    width: 150,
    height: 130,
    marginTop: 30,
    borderRadius: 20,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  SecBox: {
    width: 150,
    height: 130,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  ThirdBox: {
    width: 150,
    height: 130,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  FourthBox: {
    width: 150,
    height: 130,
    marginTop: 30,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  HomeBtn: {
    backgroundColor: "#ba55d3",
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
  CheckCovidAgn: {
    backgroundColor: "#ba55d3",
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

export default Positive;
