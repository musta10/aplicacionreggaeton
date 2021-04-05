import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const Trap = () => {
  return(
    <View style={styles.container}>
        <Text>Pagina artistas Trap</Text>
        <StatusBar style="auto" />
      </View>
          )
}


// class Trap extends React.Component {
//     render(){
//       const linkTo = useLinkTo();
//         return(
//   <View style={styles.container}>
//       <Text>Pagina artistas Trap</Text>
//       <Button onPress={() => linkTo('/profile/jane')}>
//       Go to Jane's profile
//     </Button>
//       <StatusBar style="auto" />
//     </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default Trap;