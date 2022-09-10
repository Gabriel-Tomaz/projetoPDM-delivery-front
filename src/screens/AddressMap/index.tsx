import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
  PermissionsAndroid,
} from "react-native";
import { useState, useEffect } from "react";
import MapView, { Region } from "react-native-maps";
import * as Location from "expo-location";

import Colors from "../../styles/colors";

const { width, height } = Dimensions.get("screen");

const AddressMap = () => {
  const [region, setRegion] = useState<Region>();

  const getUserLocation = () => {
    Platform.OS === "android"
      ? PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        )
          .then(() => {
            console.log("foi");
          })
          .catch((e) => {
            console.log(e);
          })
      : "";
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      
      const { coords } = await Location.getCurrentPositionAsync({});
      const teste = await Location.reverseGeocodeAsync(coords);
      console.log(teste);
      setRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      


    })();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.Neutral.white,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <MapView
        style={{ width: width, height: height }}
        onMapReady={() => getUserLocation()}
        region={region}
        zoomEnabled
        minZoomLevel={17}
        showsUserLocation
        loadingEnabled
      ></MapView>
    </SafeAreaView>
  );
};

export default AddressMap;
