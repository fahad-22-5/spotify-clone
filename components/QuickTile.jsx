import { StyleSheet, Text, View, _View } from 'react-native';
import React from 'react';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import SmallTile from './SmallTile';

export default function QuickTile(){
  return (
    <View style = {styles.Parent}>
      <View style = {styles.left}>
        <SmallTile url = {'https://i.scdn.co/image/ab67616d0000b273465b92a266969a15f7c34302'} text = 'misery lake'/>   
        <SmallTile url = {'https://i.scdn.co/image/ab6761610000e5ebf9d5f0a2efe0944e7126b801'} text = 'The Local Train'/>   
        <SmallTile url = {'https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png'} text = 'Discover Weekly'/>   
      </View>
      <View style = {styles.right}>
        <SmallTile url = {'https://i.scdn.co/image/ab6761610000e5ebc1fded2a185c54df399fe63a'} text = 'The Score'/>
        <SmallTile url = {'https://i.scdn.co/image/ab67616d0000b273b6866de8f1c7a1a1559ef5a8'} text = 'Scenic Drive (The Tape)'/>
        <SmallTile url = {'https://i.scdn.co/image/ab6761610000e5ebe186cd20e1fbe2dc6ae85b79'} text = 'Alec Benjamin'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Parent: {
    marginTop: 15,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },

  left:{
    flex: 1,
    marginRight: 4,
  },

  right:{
    flex: 1,
    marginLeft: 4,
  }
});

