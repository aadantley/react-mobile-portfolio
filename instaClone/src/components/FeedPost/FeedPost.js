// components
import { Pressable, Image, View, Text } from "react-native";
import { AntDesign, Ionicons, Feather } from "react-native-vector-icons";

// effects
import { useState } from "react";

// themes
import fonts from "../../themes/fonts";
import styles from "./styles";
import colors from "../../themes/colors";

// local components
import Comment from "../Comment";
import Carousel from "../Carousel";
import VideoPlayer from "../VideoPlayer";

// utility components
import DoublePressable from "../../utilty-components/DoublePressable";

export default function FeedPost({ post }) {
  // state
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  // state functions
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const toggleLikeButton = () => {
    setIsLiked(!isLiked);
  };

  // local variables
  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLikeButton}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = (
      <Carousel images={post.images} onDoublePress={toggleLikeButton} />
    );
  } else if (post.video) {
    content = (
      <DoublePressable>
        <VideoPlayer uri={post.video} />
      </DoublePressable>
    );
  }

  // effects -- TBD

  // JSX
  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <AntDesign name="ellipsis1" size={20} style={styles.ellipsis} />
      </View>

      {/* Content */}
      {content}

      {/* Footer */}
      <View style={styles.footer}>
        {/* Footer - Icons Row */}
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? "heart" : "hearto"}
            size={24}
            color={isLiked ? colors.accent : "black"}
            style={[styles.iconFrame, styles.likedButton]}
            onPress={toggleLikeButton}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={[styles.iconFrame, styles.commentButton]}
          />
          <Ionicons
            name="paper-plane-outline"
            size={24}
            style={[styles.iconFrame, styles.shareButton]}
          />
          <Feather
            name="bookmark"
            size={24}
            style={[styles.iconFrame, styles.bookmarkButton]}
          />
        </View>

        {/* Footer - Likes */}
        <Text>
          Liked By <Text style={styles.bold}>KareemsGotIt </Text>and{" "}
          <Text style={styles.bold}>{post.nofLikes} others</Text>
        </Text>

        {/* Footer - Post Description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 2}>
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.user.username}
          </Text>{" "}
          {post.description}
        </Text>
        {/* Show More Button */}
        <Text style={{ color: "grey" }} onPress={toggleDescriptionExpanded}>
          show {isDescriptionExpanded ? "less" : "more"}
        </Text>

        {/* Footer - Comments */}

        <Text style={{ color: "grey", paddingTop: 6 }}>
          View all {post.nofComments} comments
        </Text>

        {/* Comments */}
        {post.comments.map((comment) => (
          <Comment key={comment.id} content={comment} />
        ))}

        {/* Posted Date */}
        <Text>{post.createdAt}</Text>

        {/* end footer tag */}
      </View>
    </View>
  );
}
