import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import MoviesList from "../components/MoviesList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F0F0F0", flex: 1 }}>
      <MoviesList />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
