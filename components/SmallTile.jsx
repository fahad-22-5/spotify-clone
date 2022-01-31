import React from 'react';
import { StyleSheet, Text, View, _View, Image } from 'react-native';
import { useFonts, Outfit_500Medium } from '@expo-google-fonts/outfit';
import AppLoading from 'expo-app-loading';
import { TouchableOpacity } from 'react-native-web';


export default function SmallTile({url, text}) {
    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
    return (
        <View style = {styles.Tile}>
            <Image style = {styles.image} source = {{uri: url}}/>
            <Text style = {styles.text}>{text}</Text>
        </View>
  );
}
}

const styles = StyleSheet.create({
    Tile: {
        marginTop: 4,
        marginBottom: 4,
        height:57,
        backgroundColor: 'rgba(51, 51 ,51, 0.5)',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 57,
        width: 57,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    }, 
    text:{
        flex: 1,
        fontSize: 14,
        flexShrink: 1,
        fontFamily: 'Outfit_500Medium',
        color: 'white',
        justifyContent: 'center',
        marginLeft: 6,
        marginRight: 6,
    }
});