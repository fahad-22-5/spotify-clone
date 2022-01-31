import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";
import QuickTile from "./components/QuickTile";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { linear } from "react-native/Libraries/Animated/Easing";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import NewRelease from "./components/NewRelease";
import PodcastTray from "./components/PodcastTray";
import PlayListTrayManager from "./components/PlayListTrayManager";
import NavBar from "./components/NavBar";
import Player from "./components/Player";

export default function App() {
  var greet = 'morning';

  function setGreet(){
  var curHr = new Date().getHours();

  if(5 < curHr && curHr < 12){
    return 'Good morning';
  }else if(curHr < 18){
    return 'Good afternoon';
  }
  else if(curHr < 24){
    return 'Good evening';
  }
  else{
    return 'Night melodies';
  }
}

  greet = setGreet();

  let [fontsLoaded] = useFonts({
    Outfit_500Medium,
    Outfit_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="light"/>
        <ScrollView>
          <LinearGradient
          colors={["#1DB954", "#141414"]}
          style={styles.gradient}
        >
            
            <View style={styles.header}>
              <View style={styles.greet}>
                <Text style={styles.greet}>{greet}</Text>
              </View>

              <View style={styles.icons}>
                <Feather name="bell" size={21} style={styles.icon} />
                <MaterialIcons name="history" size={22} style={styles.icon} />
                <Ionicons
                  name="md-settings-outline"
                  size={21}
                  style={styles.icon}
                />
              </View>
            </View>
          <QuickTile />
          </LinearGradient>
          <NewRelease />
          <PodcastTray />
          <PlayListTrayManager artist = {'blackbear'}/>
          <PlayListTrayManager artist = {'OneRepublic'}/>
          <View style = {styles.bottom}>

          </View>
        </ScrollView>
        <Player/>
        <NavBar /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    justifyContent: "center",
  },

  header: {
    marginTop: "16%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingRight: 20,
  },

  greet: {
    flex: 2,
    color: "white",
    fontSize: 25,
    fontFamily: "Outfit_600SemiBold",
  },
  icons: {
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  icon: {
    flex: 1,
    textAlign: "right",
    color: "white",
  },
  bottom:{
    height: 10,
  }
});
