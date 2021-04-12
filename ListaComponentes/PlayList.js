import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Playlist extends React.Component {
    render(){
        return(
  <View style={{height: 130, marginTop: 20}}>
      <ScrollView>
          <View style={{height: 100, width:100, marginLeft:20, borderWidth: 0.5, borderColor: "#DDDDDD"}}>
            <View style={{flex: 2}}>
            <Image source={require('../img/portadaplaylist.png')} style={{flex: 1, width: null, height: null, resizeMode: "cover"}} />
            </View>
            <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                <Text>Playlist de el verdadero AnuelAA</Text>
            </View>
          </View>
      </ScrollView>
     
    </View>
        )
    }
}

const styles = StyleSheet.create({
    
    
  });
  

export default Playlist;