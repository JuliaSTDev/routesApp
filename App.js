import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapboxGL from "@rnmapbox/maps";
import { Touche } from "../routes/src/components/Touche";
import { Paint } from "./src/components/Paint";
import Draw from "./src/components/Draw";
import Map from "./src/components/Map";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiZGFuaWxvbWlndWVsMTQ4NSIsImEiOiJjbGZwYzg2ZzQwdW0yM3FwdG91Z3BoZXVtIn0.FOkbq1V7d5cjKTXgyTQVuQ"
);

export default function App() {
  return (
    <>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} />
      </View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Draw />
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});
