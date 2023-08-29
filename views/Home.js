import React, { useCallback } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from "react-native";
import { HOME_STYLES } from "../styles/Home.styles";
import { useAPI } from "../utils/hooks";

export default function Home({ navigation }) {
  const { data, loading, error, refresh } = useAPI({
    url: "https://jsonplaceholder.typicode.com/posts",
    onError: () => {
      Alert.alert("Error", error.message);
    },
  });

  const handleRefresh = useCallback(async () => {
    await refresh();
  });

  return (
    <SafeAreaView style={HOME_STYLES.view}>
      {data && (
        <FlatList
          style={HOME_STYLES.list}
          data={data}
          renderItem={(post) => (
            <TouchableOpacity
              style={HOME_STYLES.touch}
              onPress={() => navigation.navigate("Post", { id: post.item.id })}
            >
              <Text style={HOME_STYLES.text}>{post.item.title}</Text>
              <Text style={HOME_STYLES.text2}>{post.item.body}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
          }
        />
      )}
    </SafeAreaView>
  );
}
