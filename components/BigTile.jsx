import React from 'react';
import { StyleSheet, Text, View, _View, Image } from 'react-native';
import { useFonts, Outfit_500Medium, Outfit_600SemiBold } from '@expo-google-fonts/outfit';
import AppLoading from 'expo-app-loading';

export default function BigTile({url, text, author, radius, fontSize, align}){
    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
        Outfit_600SemiBold,
      });
      
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style = {styles.TileContainer}>
            <Image style = {styles.image} source = {{uri: url}} borderRadius = {radius}/>
                <Text style = {styles.textHead} fontSize = {fontSize}>{text}</Text>
            <View style = {styles.textBox}>
                <Text style = {styles.author} numberOfLines = {2}>{author}</Text>
            </View>
        </View>
    );
}   
}

const styles = StyleSheet.create({
    TileContainer: {
        marginTop: 20,
        flexGrow: 1,
        width: 170,
    },
    image: {
        height: 150,
        width: 150,
    },
    textHead:{
        paddingTop: 6,
        color: 'white',
        fontFamily: 'Outfit_500Medium',
    },
    author:{
        paddingTop: 4,
        fontSize: 13,
        color: '#757575',
        fontFamily: 'Outfit_500Medium',
    },
    textBox:{
        flexDirection: 'row',
    }
});