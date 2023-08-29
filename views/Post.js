import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { POST_STYLE } from "../styles/Post.styles";
import { useAPI } from "../utils/hooks";

export default function Post({ navigation, route }) {
  const { data, error } = useAPI({
    url: `https://jsonplaceholder.typicode.com/posts/${route.params.id}`,
    onError: () => {
      Alert.alert("Error", error.message);
    },
  });

  return (
    <SafeAreaView style={POST_STYLE.main}>
      {data && (
        <View style={POST_STYLE.main}>
          <Text style={POST_STYLE.title}>{data.title}</Text>
          <Text style={POST_STYLE.body}>{data.body}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
