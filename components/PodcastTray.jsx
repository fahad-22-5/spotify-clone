import React from 'react';
import { StyleSheet, Text, View, _View, ScrollView } from 'react-native';
import { useFonts, Outfit_500Medium, Outfit_600SemiBold } from '@expo-google-fonts/outfit';
import AppLoading from 'expo-app-loading';
import BigTile from './BigTile';

export default function PodcastTray(){

    const PodImg = [
        'https://i.scdn.co/image/ab6765630000ba8af97ee2ca7df89e73f73cb1e4',
        'https://i.scdn.co/image/f07f5f6476583502fac99edd5eb83e99dfaf4633',
        'https://i.scdn.co/image/ab6765630000ba8ab85311900115d459884cae79',
        'https://i.scdn.co/image/ab6765630000ba8a38a647e9cd7847f72091a0ec',
        'https://i.scdn.co/image/ab6765630000ba8a15a5ae62a862d85d89289835',
    ]

    const PodTitle = [
        "Unexplainable",
        "Philosophize This!",
        'Hidden Brain',
        'The Weirdest Thin..',
        'No Stupid Questions',
    ]

    const PodArt = [
        'Vox',
        'Stephen West',
        'Hidden Brain',
        'Popular Science',
        'Freakonomics Radio + ..',
    ]

    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
        Outfit_600SemiBold,
      });
      
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style = {styles.PodCont}>
            <Text style = {styles.Head}>Podcasts for you</Text>
            <ScrollView horizontal = {true}>
                <View style = {styles.PodTile}>
                    <BigTile url = {PodImg[0]} text = {PodTitle[0]} author = {PodArt[0]} radius = {10} fontSize = {16}/>
                    <BigTile url = {PodImg[1]} text = {PodTitle[1]} author = {PodArt[1]} radius = {10} fontSize = {16}/>
                    <BigTile url = {PodImg[2]} text = {PodTitle[2]} author = {PodArt[2]} radius = {10} fontSize = {16}/>
                    <BigTile url = {PodImg[3]} text = {PodTitle[3]} author = {PodArt[3]} radius = {10} fontSize = {16}/>
                    <BigTile url = {PodImg[4]} text = {PodTitle[4]} author = {PodArt[4]} radius = {10} fontSize = {16}/>
                </View>
            </ScrollView>
        </View>
    );
}   
}

const styles = StyleSheet.create({
    
    PodCont: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 30,
    },
    Head: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Outfit_600SemiBold',
        marginTop: 5,
    },
    PodTile:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});