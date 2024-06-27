import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  PostDetailScreen: undefined;
};

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.bio}>BA @onic.esports{"\n"}John 13:7</Text>
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About Vonzy</Text>
          <Text style={styles.aboutText}>Birth: 14 December 2000</Text>
          <Text style={styles.aboutText}>Job: Brand Ambrassador</Text>
          <Text style={styles.aboutText}>Hobby: Modelling, Sport, Music</Text>
          <Text style={styles.aboutText}>Height: 165 cm, Weight: 54 kg</Text>
        </View>
      </View>
      <View style={styles.postsContainer}>
        <Text style={styles.postsTitle}>Posts</Text>
        <View style={styles.postsGrid}>
          <TouchableOpacity
            style={[styles.post, styles.post1]}
            onPress={() => navigation.navigate("PostDetailScreen")}
          />
          <TouchableOpacity
            style={[styles.post, styles.post2]}
            onPress={() => navigation.navigate("PostDetailScreen")}
          />
          <TouchableOpacity
            style={[styles.post, styles.post3]}
            onPress={() => navigation.navigate("PostDetailScreen")}
          />
          <TouchableOpacity
            style={[styles.post, styles.post4]}
            onPress={() => navigation.navigate("PostDetailScreen")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 250,
  },
  infoContainer: {
    padding: 15,
  },
  name: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    lineHeight: 24,
  },
  aboutContainer: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  aboutTitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
    fontWeight: "bold",
  },
  aboutText: {
    fontSize: 14,
    color: "white",
  },
  postsContainer: {
    padding: 15,
  },
  postsTitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  postsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  post: {
    width: "48%",
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  post1: { backgroundColor: "brown" },
  post2: { backgroundColor: "darkred" },
  post3: { backgroundColor: "darkgreen" },
  post4: { backgroundColor: "green" },
});
