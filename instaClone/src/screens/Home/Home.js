// components
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

// local
import FeedPost from "../../components/FeedPost";
import posts from "../../../assets/data/posts.json";

export default function Home() {
  return (
     <FlatList 
        data={posts}
        renderItem={({item})=> <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
     />
  );
}


