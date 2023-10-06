import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>here</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>for</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Options</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>🎀</Text>
        </View>
       
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight : 'bold',
        paddingHorizontal : 8,
        
     },
     container :{
        padding : 8
     },
     card:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
         width : 100,
         height : 100,
         padding : 8,
         borderRadius : 4,
         margin : 8
     },
     cardElevated:{
        backgroundColor : '#BEBEBB',
        elevation : 4,
        shadowOffset :{
            width : 1,
            height : 1
        },
        shadowOpacity : 0.4,
        shadowColor : 'red',
        shadowRadius : 2
     }
})