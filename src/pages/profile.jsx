import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

function Profile() {
  return (
    <View style={styles.body}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
  },
});

export default Profile;
