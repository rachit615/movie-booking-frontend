import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import malls from "../data/mall";
import { useNavigation } from "@react-navigation/native";

const MovieScreen = () => {
  const route = useRoute();
  const [selectedDate, setSelectedDate] = useState("");
  const mallsData = malls;
  const navigation = useNavigation();

  const renderMallItem = ({ item }) => (
    <View key={item?.id}>
      <Text style={{ marginLeft: 10, fontSize: 13, fontWeight: "500" }}>
        {item?.name}
      </Text>
      <View style={{ margin: 10, marginLeft: 20 }}>
        <FlatList
          data={item?.showtimes}
          numColumns={3}
          renderItem={({ item: showTime }) => (
            <Pressable
              style={styles.showtimeButton}
              onPress={() => {
                navigation.navigate("Theatre", {
                  movieName: route.params.name,
                  showTime: showTime,
                  mall: item?.name,
                  seatsData: item?.tableData,
                });
              }}
            >
              <Text style={styles.showtimeText}>{showTime}</Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );

  const ListHeaderComponent = () => (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="arrow-back"
            onPress={() => navigation.goBack()}
            size={24}
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 14, fontWeight: "500" }}>
            {route.params.name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginRight: 10 }}>
          <Ionicons name="search" size={24} style={{ marginHorizontal: 10 }} />
          <Ionicons
            name="filter-outline"
            size={24}
            style={{ marginHorizontal: 10 }}
          />
          <Ionicons
            name="share-outline"
            size={24}
            style={{ marginHorizontal: 10 }}
          />
        </View>
      </View>
      <View
        style={{ marginLeft: 10, flexDirection: "row", alignItems: "center" }}
      >
        <AntDesign name="Safety" color={"orange"} size={24} />
        <Text style={{ marginLeft: 10 }}>Your safety is our top priority</Text>
      </View>
      <HorizontalDatepicker
        mode="gregorian"
        startDate={new Date("2020-08-20")}
        endDate={new Date("2020-08-31")}
        initialSelectedDate={new Date("2020-08-22")}
        onSelectedDateChange={(date) => setSelectedDate(date)}
        selectedItemWidth={170}
        unselectedItemWidth={38}
        itemHeight={38}
        itemRadius={10}
        selectedItemTextStyle={styles.selectedItemTextStyle}
        unselectedItemTextStyle={styles.selectedItemTextStyle}
        selectedItemBackgroundColor="#222831"
        unselectedItemBackgroundColor="#ececec"
        flatListContainerStyle={styles.flatListContainerStyle}
      />
      <View style={{ flexDirection: "row", marginTop: 10, marginBottom: 20 }}>
        <View style={styles.priceFilter}>
          <Text>$0 - $50</Text>
        </View>
        <View style={styles.priceFilter}>
          <Text>$50 - $70</Text>
        </View>
        <View style={styles.priceFilter}>
          <Text>$70 - $90</Text>
        </View>
      </View>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={mallsData}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderMallItem}
        keyExtractor={(mallItem) => mallItem.id.toString()}
      />
    </SafeAreaView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  selectedItemTextStyle: {
    color: "black",
  },
  flatListContainerStyle: {
    paddingHorizontal: 10,
  },
  priceFilter: {
    borderRadius: 28,
    paddingHorizontal: 20,
    borderWidth: 1,
    marginHorizontal: 10,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
  },
  showtimeButton: {
    width: 100,
    height: 40,
    borderWidth: 0.5,
    borderColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 21,

    marginBottom: 13,
  },
  showtimeText: {
    color: "#03AD00",
    fontWeight: "500",
  },
});
