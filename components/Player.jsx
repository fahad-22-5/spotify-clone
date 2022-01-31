import React from "react";
import { StyleSheet, Text, View, _View, Image } from "react-native";
import {
  useFonts,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from "@expo-google-fonts/outfit";
import AppLoading from "expo-app-loading";
import MarqueeText from "react-native-marquee";
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Player(){
    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
        Outfit_600SemiBold,
    });
    
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return(
            <View style = {styles.playerCont}>
                <View style = {styles.player}>
                <Image style = {styles.image} source = {{uri: 'https://i.scdn.co/image/ab67616d0000b273465b92a266969a15f7c34302'}}/>
                <View style = {styles.textCont}>
                <MarqueeText
                    style={styles.marq}
                    duration={4000}
                    marqueeOnStart
                    loop
                    marqueeDelay={1000}
                    marqueeResetDelay={1000}
                    >
                    u love u(with Tata McRae) • blackbear, Tata Mcrae
                    </MarqueeText>
                    <View style = {styles.headphone}>
                        <Feather name="volume-2" fontSize = {18} color = "#1DB954" style = {styles.speakerIcon}/>
                        <Text style = {styles.speaker}>Headphones</Text>
                    </View>
                </View>
                <View style = {styles.iconTray}>
                    <SimpleLineIcons name="earphones" style = {styles.icon1}/>
                    <AntDesign name="hearto" style = {styles.icon2} />
                    <Ionicons name="pause" style = {styles.icon3}/>
                </View>
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    playerCont:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 2,
    },
    player: {
        backgroundColor: '#3c3c34',
        height: 52,
        width: '95%',
        borderRadius: 7,
        flexDirection: 'row',
        alignContent: 'center',
    },
    image: {
        margin: 6,
        height: 40,
        width: 40,
        borderRadius: 5,
    },
    marq:{
        fontSize: 13, 
        fontFamily: 'Outfit_600SemiBold', 
        color: 'white',
    },
    textCont:{
        marginTop: '2%',
        width: '50%',
    },
    iconTray:{
        flexDirection: 'row', 
    },
    icon1:{
        color: '#1DB954',
        fontSize: 18,
        padding: 12,
    },
    icon2:{
        color: 'white',
        fontSize: 22,
        padding: 6,
        paddingTop: 12,

    },
    icon3:{
        color: 'white',
        fontSize: 26,
        padding: 7,
        paddingTop: 10,
    },
    headphone:{
        marginTop: '2%',
        flexDirection: 'row',
    },
    speaker:{
        fontSize: 12,
        color: '#1DB954',
        marginLeft: 4,
        top: 0,
    },
    speakerIcon:{
        paddingTop: 2,
    }
});