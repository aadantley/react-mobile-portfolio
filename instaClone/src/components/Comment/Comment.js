import {View, Text} from 'react-native';
import { AntDesign, Ionicons, Feather } from "react-native-vector-icons";
import styles from './styles';

export default function Comment ({content}) {
    return (
        <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>
            {content.user.username}
          </Text>{" "}
          {content.comment}
        </Text>
        <AntDesign name="hearto" size={14} />
      </View>
    )
}