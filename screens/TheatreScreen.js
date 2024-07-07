import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const TheatreScreen = () => {
  const route = useRoute();
  const { showTime, movieName, mallName, seatsData } = route.params;

  const handleSeatPress = (item) => {};

  const renderTheatreSeat = ({ item }) => (
    <Pressable style={styles.seatButton} onPress={() => handleSeatPress(item)}>
      <Text style={styles.seatText}>{item}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movieName}</Text>
      <Text style={styles.subtitle}>{mallName}</Text>
      <Text style={styles.subtitle}>Show Time: {showTime}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        <FlatList
          data={seatsData}
          numColumns={7}
          renderItem={renderTheatreSeat}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
          backgroundColor: "#d8d8d8",
          padding: 10,
        }}
      >
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color={"#ffc40c"}
          />
          <Text>selected</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color={"#fff"}
          />
          <Text>Vacant</Text>
        </View>
        <View>
          <FontAwesome
            style={{ textAlign: "center", marginBottom: 4 }}
            name="square"
            size={24}
            color={"#989898"}
          />
          <Text>Occupied</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingLeft: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 12, marginBottom: 10 }}>
            Show end time approx 6:51 pm
          </Text>
          <Text style={{ fontSize: 16 }}>No Seats Selected </Text>
        </View>
        <View
          style={{
            backgroundColor: "#d8d8d8",
            padding: 10,
            width: 150,
            borderRadius: 4,
          }}
        >
          <Text>Now with ticket cancellation</Text>
        </View>
      </View>
      <View style={styles.payBtn}>
        <View>
          <Text>1's Seats Selected</Text>
        </View>
        <View>
          <Text>Pay ₹ 190</Text>
        </View>
      </View>
    </View>
  );
};

export default TheatreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 18,
    marginLeft: 20,
  },
  seatsContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "green",
  },
  scrollView: {
    // maxHeight: 150, // Adjust this height as needed
    // borderWidth: 1,
    paddingHorizontal: 10,
    maxHeight: 500,
  },
  seatButton: {
    borderWidth: 0.5,
    borderColor: "black",
    height: 30,
    width: 30,
    margin: 10,
    borderRadius: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  seatText: {
    fontSize: 16,
  },
  payBtn: {
    backgroundColor: "#ffc40c",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 10,
  },
});
