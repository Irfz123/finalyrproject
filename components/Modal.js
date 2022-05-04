import {
  Linking,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from "react-native";

const CustomModal = ({ modalStatus, modalVisible, title, data }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => modalStatus(false)}
          >
            <Image
              source={require("../image/icons/close.png")}
              resizeMode="contain"
              style={styles.closeBtn}
            ></Image>
          </Pressable>

          <Text style={styles.title}>{title}</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Text style={styles.modalListItem}>
                {"\u2022" + " "}
                {item.key}
              </Text>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    display: "flex",
    height: 550,
    alignSelf: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    backgroundColor: "#D3B5E5",
  },
  modalListItem: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    fontSize: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  closeBtn: {
    height: 15,
    width: 15,
    marginTop: 20,
    marginRight: 20,
    alignSelf: "flex-end",
  },
  breathless: {
    width: 80,
    height: 80,
    marginBottom: 140,
    alignSelf: "center",
  },
});

export default CustomModal;
