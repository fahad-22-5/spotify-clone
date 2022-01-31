import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, _View, Image } from 'react-native';
import { useFonts, Outfit_500Medium, Outfit_600SemiBold, Outfit_300Light } from '@expo-google-fonts/outfit';
import AppLoading from 'expo-app-loading';
import { AntDesign } from '@expo/vector-icons';


export default function NewRelease() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive((previous) => {
            return !previous;
        });
    };

    const buttonBg = !active ? '#bfbfbf': "#1DB954";

    let [fontsLoaded] = useFonts({
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_300Light
      });

        if (!fontsLoaded) {
            return <AppLoading />;
          } else {
        return (
            <View style = {styles.container}>
                <View style = {styles.Head}>
                    <Image style = {styles.image1} source = {{uri : 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6'}}/>
                    <View style = {styles.textBox}>
                        <Text style = {styles.text1}>NEW RELEASE FROM</Text>
                        <Text style = {styles.text2}>Ed Sheeran</Text>
                    </View>
                </View>
                <View style = {styles.Tile}>
                    <Image source = {{uri: 'https://i.scdn.co/image/ab67616d0000b2736fd53ff975e732cda57f9dcc'}} style = {styles.image2}/>
                    <View style = {styles.box}>
                        <Text style = {styles.text3}>Peru(Acoustic)</Text>
                        <Text style = {styles.text4}>Single • Fireboy DML, Ed Sheeran</Text>
                        <View style = {styles.button}>
                            <AntDesign name="heart" size={24} color={buttonBg} onPress={()=>handleClick()}/>
                            <AntDesign name="pausecircle" size={32} color="white" />
                        </View>
                    </View>
                </View>
            </View>
        );
        }
    }
 

const styles = StyleSheet.create({
    Head: {
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 30,
        flexDirection: 'row',
    },
    text1:{
        color: '#595959',
        fontSize: 12,
        fontFamily: 'Outfit_300Light',
    },
    text2:{
        color: 'white',
        fontSize: 25,
        fontFamily: 'Outfit_600SemiBold',
        marginTop: 5,
    },
    textBox:{
        marginLeft: 20,
        flexDirection: 'column',
    },
    image1:{
        height: 47,
        width: 47,
        borderRadius: 60,
    },
    Tile:{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 18,
        backgroundColor: '#333333',
        borderRadius: 10,
        flexDirection: 'row',
        height: 140,
    },
    image2:{
        height: 140,
        width: 140,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    box:{
        padding: 15,
        flexShrink: 1,
    },
    text3:{
        color: '#1DB954',
        fontFamily: 'Outfit_600SemiBold',
        fontSize: 17,
    },
    text4:{
        paddingTop: 5,
        fontSize: 15,
        color: '#bfbfbf',
        fontFamily: 'Outfit_500Medium',
    }, 
    button:{
        flexDirection: 'row',
        paddingTop: 22,
        justifyContent: 'space-between',
    }
})