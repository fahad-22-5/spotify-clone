import React from 'react';
import { StyleSheet, Text, View, _View, ScrollView, Image } from 'react-native';
import { useFonts, Outfit_500Medium, Outfit_600SemiBold } from '@expo-google-fonts/outfit';
import AppLoading from 'expo-app-loading';
import PlaylistTray from './PlaylistTray';

export default function PlayListTrayManager({artist}){

    //JSON data
    function setDb(){
        const db = {
            'blackbear': {
                    "TileImg" : [
                        'https://i.scdn.co/image/ab6761610000e5eb15b390722c471fdfd32d1f89',
                        'https://i.scdn.co/image/ab67706f000000032f8360162864ef398b31bc3c',
                        'https://seeded-session-images.scdn.co/v1/img/artist/5Pwc4xIPtQLFEnJriah9YJ/en',
                        'https://i.scdn.co/image/ab67616d0000b273fe6b3b44031550865030e0c5',
                        'https://i.scdn.co/image/ab67616d0000b2734ddc024c1653b1b2f1c41e92',
                        'https://i.scdn.co/image/ab67616d0000b2732e2889865b7b05955c1d3bcf',
                        'https://i.scdn.co/image/ab67616d0000b273344d2f5474e34d7dfcf8fefb',
                    ],
                    "TileName" : [
                        'The Black Bear',
                        'This Is blackbear',
                        'blackbear Radio', 
                        'Dreamin(with blackb...',
                        'misery lake',
                        'everything means no...',
                        'anxiety (feat. FRND)',
                    ],
                    "TileContext" : [
                        'The Black Bear',
                        'All the essentials from blackbear, right here.',
                        'By Spotify',
                        'The Score, blackbear',
                        '2021 • EP',
                        '2020 • Album',
                        'blackbear, FRND',
                    ]
                },
                "OneRepublic":{
                    "TileImg" : [
                        'https://i.scdn.co/image/ab6761610000e5eb15b390722c471fdfd32d1f89',
                        'https://i.scdn.co/image/ab67706f000000032f8360162864ef398b31bc3c',
                        'https://seeded-session-images.scdn.co/v1/img/artist/5Pwc4xIPtQLFEnJriah9YJ/en',
                        'https://i.scdn.co/image/ab67616d0000b273fe6b3b44031550865030e0c5',
                        'https://i.scdn.co/image/ab67616d0000b2734ddc024c1653b1b2f1c41e92',
                        'https://i.scdn.co/image/ab67616d0000b2732e2889865b7b05955c1d3bcf',
                        'https://i.scdn.co/image/ab67616d0000b273344d2f5474e34d7dfcf8fefb',
                    ],
                    "TileName" : [
                        'OneRepublic',
                        'This Is OneRepublic',
                        'OneRepublic Radio',
                        'Wanted',
                        'Sunshine. The EP',
                        'Human(Deluxe)',
                        'Bones(feat.OneRepub..',
                    ],
                    "TileContext" : [
                        'The Black Bear',
                    'All the essentials from OneRepbublic, right here.',
                    'By Spotify',
                    '2019 • Single',
                    '2021 • EP',
                    '2021 • Album',
                    'Galantis, OneRepublic',
                    ]
                }
        };

        if(artist == 'blackbear'){
            return db.blackbear;
        }
        else if(artist == 'OneRepublic'){
            return db.OneRepublic;
        }
    }

    const data = setDb();

    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
        Outfit_600SemiBold,
      });
      
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style = {styles.playListCont}>
            <PlaylistTray artist = {artist} data = {data}/>
        </View>
    );
}
}

const styles = StyleSheet.create({ 
    playListCont: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 30,
    },
});