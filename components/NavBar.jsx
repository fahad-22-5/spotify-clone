import React from "react";
import { StyleSheet, Text, View, _View, Image } from "react-native";
import {
  useFonts,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import AppLoading from "expo-app-loading";
import { LinearGradient } from "expo-linear-gradient";
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NavBar() {
  

  let [fontsLoaded] = useFonts({
    Outfit_500Medium,
    Outfit_600SemiBold,
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return( 
        <LinearGradient
        colors={['#141414', 'black']}>
        <View style={styles.navBar}>
          <View style={styles.btn}>
            <Foundation name="home" size={26} color={'white'}/>
            <Text style = {styles.navText}>Home</Text>
          </View>
          <View style={styles.btn}>
            <AntDesign name="search1" size={24} color={'white'}/>
            <Text style = {styles.navText}>Search</Text>
          </View>
          <View style={styles.btn}>
          <MaterialCommunityIcons name="menu" size={24} color={'white'}/>
          <Text style = {styles.navText}>Your Library</Text>
            </View>
        </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        width: '100%',
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 8,
    },
    navText: {
        color: 'white',
        fontSize: 10,
    },
    btn: {
      alignItems: 'center',
      justifyContent: 'center',
    },
});
