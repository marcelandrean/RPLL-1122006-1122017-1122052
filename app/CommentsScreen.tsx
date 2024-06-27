import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";

const comments = [
  { id: '1', username: 'marcelandrean_', comment: 'Ganteng banget bang!', time: '10 min ago' },
];

export default function CommentsScreen() {
  const renderComment = ({ item }) => (
    <View style={styles.comment}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.commentText}>{item.comment}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={renderComment}
        keyExtractor={item => item.id}
        style={styles.commentList}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a comment..."
        placeholderTextColor="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  commentList: {
    flex: 1,
  },
  comment: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  commentText: {
    color: "white",
    marginTop: 4,
  },
  time: {
    color: "grey",
    fontSize: 12,
    marginTop: 4,
    textAlign: "right",
  },
  input: {
    height: 50,
    borderColor: "#1f1f1f",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "white",
    marginTop: 10,
  },
});
