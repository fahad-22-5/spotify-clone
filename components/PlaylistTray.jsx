import React from 'react';
import { StyleSheet, Text, View, _View, ScrollView, Image } from 'react-native';
import { useFonts, Outfit_500Medium, Outfit_600SemiBold, Outfit_300Light } from '@expo-google-fonts/outfit';
import AppLoading from 'expo-app-loading';
import BigTile from './BigTile';

export default function PlaylistTray({artist, data}){
    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_300Light,
      });
      
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style = {styles.PlayCont}>
            <View style = {styles.forTheFans}>
                <Image style = {styles.artImg} source = {{uri: data.TileImg[0]}}/>
                <View style = {styles.textBox}>
                    <Text style = {styles.forFans}>FOR FANS OF</Text>
                    <Text style = {styles.forTheFansText}>{artist}</Text>
                </View>
            </View>
            <ScrollView horizontal = {true}>
                <View style = {styles.playlist}>
                    <BigTile url = {data.TileImg[1]} text = {data.TileName[1]} author = {data.TileContext[1]} fontSize = {12}/>
                    <BigTile url = {data.TileImg[2]} text = {data.TileName[2]} author = {data.TileContext[2]} fontSize = {12}/>
                    <BigTile url = {data.TileImg[3]} text = {data.TileName[3]} author = {data.TileContext[3]} fontSize = {12}/>
                    <BigTile url = {data.TileImg[4]} text = {data.TileName[4]} author = {data.TileContext[4]} fontSize = {12}/>
                    <BigTile url = {data.TileImg[5]} text = {data.TileName[5]} author = {data.TileContext[5]} fontSize = {12}/>
                    <BigTile url = {data.TileImg[6]} text = {data.TileName[6]} author = {data.TileContext[6]} fontSize = {12}/>
                </View>
            </ScrollView>
        </View>
    );
}
}

const styles = StyleSheet.create({
    PlayCont: {
        flexDirection: 'column',
    },
    artImg: {
        height: 47,
        width: 47,
        borderRadius: 60,
    },
    forTheFansText:{
        color: 'white',
        fontSize: 25,
        fontFamily: 'Outfit_600SemiBold',
        marginTop: 5,
    },
    forTheFans:{
        flexDirection: 'row',
    },
    forFans:{
        color: '#595959',
        fontSize: 12,
        fontFamily: 'Outfit_300Light',
    },
    textBox:{
        marginLeft: 20,
    },
    playlist:{
        flexDirection: 'row',
    }
});