import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardDetail from "../components/cardDetail";
import SearchBar from "../components/searchBar";

const ProductDetail = () => {
  return (
    <ScrollView>
      <View style={styles.bodyProductDetail}>
        <SearchBar />
        <CardDetail />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyProductDetail: {
    padding: 15,
  },
});

export default ProductDetail;
