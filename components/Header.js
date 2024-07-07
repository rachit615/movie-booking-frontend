import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

export default function Header() {
  const [pressableWidth, setPressableWidth] = useState(0);

  const handleLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setPressableWidth(width);
  };

  const theatreExperiences = [
    {
      id: "0",
      name: "IMAX",
    },
    {
      id: "1",
      name: "4DX",
    },
    {
      id: "2",
      name: "PXL",
    },
    {
      id: "3",
      name: "GOLD",
    },
    {
      id: "4",
      name: "PLAYHOUSE",
    },
  ];

  return (
    <View>
      <ImageBackground
        style={{ aspectRatio: 5 / 2, height: 170 }}
        source={{
          uri: "https://originserver-static1-uat.pvrcinemas.com/newweb/movies/big/1460x600/HO00020779.jpg",
        }}
      >
        <Pressable
          onLayout={handleLayout}
          style={{
            position: "absolute",
            backgroundColor: "white",
            width: "80%",
            height: 130,
            top: 140,
            left: "50%",
            transform: [{ translateX: -pressableWidth * 0.5 }],
            padding: 10,
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: 500, color: "gray" }}>
            Releasing in 1 day
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Vikrant Rona
              </Text>
              <Text style={{ color: "gray" }}>U/A KANNADA</Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#ffc40c",
                borderRadius: 6,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 70,
                padding: 10,
              }}
            >
              <Text>BOOK</Text>
            </Pressable>
          </View>
          <Text style={{ fontSize: 15, fontWeight: 500, marginTop: 8 }}>
            Fantasy, thriller, action
          </Text>
        </Pressable>
      </ImageBackground>
      <View style={{ marginTop: 120, marginLeft: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {theatreExperiences.map((item) => (
            <View
              style={{
                paddingHorizontal: 16,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                borderColor: "C0C0C0",
                borderWidth: 0.9,
                margin: 10,
              }}
              key={item?.id}
            >
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                {item?.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
