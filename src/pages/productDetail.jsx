import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardDetail from "../components/cardDetail";
import SearchBar from "../components/searchBar";
import Reseña from "../components/reseña";

const ProductDetail = () => {
  return (
    <ScrollView>
      <View style={styles.bodyProductDetail}>
        <SearchBar />
        <CardDetail />
        <Reseña />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyProductDetail: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
});

export default ProductDetail;
