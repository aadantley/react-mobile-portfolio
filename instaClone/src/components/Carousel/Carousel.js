// library imports
import { View, Text, FlatList, Image, useWindowDimensions } from "react-native";
import { useState, useRef } from "react";

// local imports
import DoublePressable from "../../utilty-components/DoublePressable";
import colors from "../../themes/colors";

export default function Carousel({ images, onDoublePress }) {
  // state variables
  const [activeImageIndex, setActiveImageindex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  // state management
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveImageindex(viewableItems[0].index || 0);
    }
  });

  // local variables
  const { width } = useWindowDimensions();

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex == index ? colors.primary : colors.white,
              marginHorizontal: 5,
              margin: 10,
            }}
          />
        ))}
      </View>
    </View>
  );
}
