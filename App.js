import { Button, StyleSheet, View } from "react-native";

import { ResizeMode, Video } from "expo-av";
import { useRef, useState } from "react";

export default function App() {

  const video = useRef();

  const [status, setStatus] = useState({});

  return (
    <>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={require("./assets/animation.mp4")}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View>
          <Button
            title={status.isPlaying ? "Pause" : "Play"}
            onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}
            style={styles.button}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 24,
  },
  button: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000ff",
    color: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0000ff",
    padding: 18
  }
});
