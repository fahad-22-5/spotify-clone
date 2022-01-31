import { StyleSheet, Text, View, _View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ReadHeart(){
    return(
        <View style = {styles.container}>
            <AntDesign name="heart" size={24} color="#ff4d4d" />
        </View>
    )
}