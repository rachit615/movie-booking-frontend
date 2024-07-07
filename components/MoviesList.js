import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import movies from "../data/movies";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";

const MoviesList = () => {
  const data = movies;
  console.log("data", data);
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        ListHeaderComponent={<Header />}
        renderItem={({ item }) => (
          <Pressable
            style={{
              // borderWidth: 1,
              display: "flex",
              padding: 10,
              marginLeft: 4,
              width: "48%",
            }}
            onPress={() => {
              navigation.navigate("Movie", {
                name: item?.name,
              });
            }}
          >
            <Image
              style={{
                height: 240,
                borderRadius: 6,
                width: "100%",
                marginBottom: 10,
                // borderWidth: 0.5,
                // borderColor: "black",
              }}
              source={{ uri: item?.image }}
            />
            <View>
              <Text
                style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}
                numberOfLines={1}
              >
                {item?.name}
              </Text>
              <Text
                style={{ fontSize: 13, color: "gray", marginBottom: 4 }}
              >{`U/A • ${item?.language}`}</Text>
              <Text style={{ fontWeight: 500, marginBottom: 8 }}>
                {item?.genre}
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
              onPress={() => {
                navigation.navigate("Movie", {
                  name: item?.name,
                });
              }}
            >
              <Text>BOOK</Text>
            </Pressable>
          </Pressable>
        )}
        key={({ item }) => item.id}
      />
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
