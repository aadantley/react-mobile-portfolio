import { Pressable, Text } from "react-native";

export default function DoublePressable ({ onDoublePress, children }) {
  let lastTap = 0;
  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }
    lastTap = now;
  };

  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};


