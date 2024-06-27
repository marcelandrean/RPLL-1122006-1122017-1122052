import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export type RootStackParamList = {
  CommentsScreen: undefined;
};

export default function PostDetailScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.post}>
        <Image
          source={{
            uri: "https://ih1.redbubble.net/image.5455051763.5853/flat,750x,075,f-pad,750x1000,f8f8f8.u1.webp",
          }}
          style={styles.postImage}
        />
        <View style={styles.postContent}>
          <Text style={styles.username}>jessicatimotius_</Text>
          <Text style={styles.time}>2 days ago</Text>
          <Text style={styles.caption}>jasonenrico_, Mantuy v2</Text>
          <View style={styles.interactionContainer}>
            <Text style={styles.likeCount}>
              <FontAwesome name="thumbs-o-up" size={16} color="white" />
              {"\t"} 541
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              <Text style={styles.commentCount}>
                <FontAwesome name="commenting-o" size={16} color="white" />
                {"\t"}1
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  post: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    marginBottom: 16,
  },
  postImage: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  postContent: {
    padding: 16,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    color: "grey",
    fontSize: 12,
    marginVertical: 4,
  },
  caption: {
    color: "white",
    marginVertical: 8,
  },
  interactionContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 24,
  },
  likeCount: {
    color: "white",
  },
  commentCount: {
    color: "white",
  },
});
