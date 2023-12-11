import { View, Text, FlatList } from "react-native";
import comments from "../../../assets/comments-data/comments.json";
import Comment from "../../components/Comment";

const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => <Comment comment={item} />}
      />
    </View>
  );
};

export default CommentsScreen;
