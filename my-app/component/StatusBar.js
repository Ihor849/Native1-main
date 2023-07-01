import { StyleSheet, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import moment from 'moment'


export default function CastomStatusBar() {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(moment().format('HH:mm'));
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Text>{currentTime}</Text>
      </View>
      <View style={styles.centercontainer}></View>
      <View style={styles.rightcontainer}>
        <FontAwesome5 name="signal" size={16} color="black" />
        <Entypo name="signal" size={16} color="black" />
        <FontAwesome name="battery-4" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 44,
   

    backgroundColor: "transparent",
  },

  leftcontainer: {
    width: 80,
  },
  centercontainer: {
    width: 219,
    height: 30,
    alignSelf:"flex-start",
    backgroundColor: "#000000",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  rightcontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "centr",
    gap: 5,
    width: 80,
  },
});
