import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import repositories from "../data/repositories";

function RepositoryList() {
  return (
    <FlatList
      style={styles.bodyRepository}
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <View>
          <Text style={styles.textLabel}>
            Nombre: <Text style={styles.textInformation}>{repo.name}</Text>
          </Text>
          <Text style={styles.textLabel}>
            Descripcion:{" "}
            <Text style={styles.textInformation}>{repo.description}</Text>
          </Text>
          <Text style={styles.textLabel}>
            Lenguajes:{" "}
            <Text style={styles.textInformation}>{repo.language}</Text>
          </Text>
          <Text style={styles.textLabel}>
            Link Web: <Text style={styles.textInformation}>{repo.link}</Text>
          </Text>
          <Text style={styles.textLabel}>
            Repositorio:{" "}
            <Text style={styles.textInformation}>{repo.github}</Text>
          </Text>
        </View>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  bodyRepository: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textInformation: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default RepositoryList;
