import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
    <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Red</Text>
        </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
     headingText:{
        fontSize: 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        
     },
     container: {
        flex : 1,
        flexDirection : 'row'
     },
     card :{
        flex :1,
         height:100,
         width:100,
         margin : 8,
         borderRadius: 4,
         alignItems : 'center',
         justifyContent: 'center',
     },
     cardOne :{
         backgroundColor : 'red'
     },
     cardTwo :{
        backgroundColor : 'blue'
     },
     cardThree :{
        backgroundColor : 'green'
     }
})