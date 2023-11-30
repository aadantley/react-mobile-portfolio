import * as React from "react";
import { Video, ResizeMode } from "expo-av";
import styles from "./styles";

export default function VideoPlayer({ uri }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return <Video
            ref= {video}
            style={styles.video}
            source={{ uri }} 
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={ status => setStatus(() => status)}
            />;
}
