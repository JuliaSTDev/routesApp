import React, { useState } from "react";
import { View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Canvas, Path, Paint } from "@shopify/react-native-skia";

export default function Draw() {
  const [paths, setPaths] = useState([]);

  const handlePanStart = (gesture) => {
    const { x, y } = gesture;
    const newPaths = [
      ...paths,
      {
        segments: [`M ${x} ${y}`],
        color: "#FAAF32",
      },
    ];
    setPaths(newPaths);
  };

  const handlePanUpdate = (gesture) => {
    const { x, y } = gesture;
    if (paths.length > 0) {
      const updatedPaths = [...paths];
      const lastIndex = updatedPaths.length - 1;
      updatedPaths[lastIndex].segments.push(`L ${x} ${y}`);
      setPaths(updatedPaths);
    }
  };

  const panGestureHandler = Gesture.Pan()
    .onStart(handlePanStart)
    .onUpdate(handlePanUpdate)
    .minDistance(1);

    const paint = new Paint();
    paint.setColor('#FAAF3280');

  console.log("Render paths", paths); // Log para verificar o estado `paths`

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GestureDetector gesture={panGestureHandler}>
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <Canvas style={{ flex: 1 }}>
            {paths.map((p, index) => (
              <Path
                key={index}
                path={p.segments.join(" ")}
                strokeWidth={5}
                style="stroke"
                color={p.color}
                paint={paint}
              />
            ))}
          </Canvas>
        </View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
