import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IndexScreen: undefined;
  filter: undefined;
  message: undefined;
};

export default function IndexScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("filter")}>
          <FontAwesome name="sliders" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>CONNECTOPIA</Text>
        <TouchableOpacity onPress={() => navigation.navigate("message")}>
          <AntDesign name="message1" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://media.hitekno.com/thumbs/2022/02/20/13001-vonny-felicia-alias-onic-vonzy-brand-ambassador-onic-esports/730x480-img-13001-vonny-felicia-alias-onic-vonzy-brand-ambassador-onic-esports.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            Vonzy, 23 <FontAwesome name="female" size={16} color="pink" />
          </Text>
          <Text style={styles.profession}>Brand Ambassador</Text>
          <Text style={styles.bio}>BA @onic.esports{"\n"}John 13:7</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="times" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  card: {
    width: "90%",
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    color: "white",
  },
  profession: {
    fontSize: 16,
    color: "gray",
  },
  bio: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: 20,
  },
  actionButton: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
