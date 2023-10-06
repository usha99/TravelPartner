import { Image, Linking, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsites(webSiteLink: string) {
       Linking.openURL(webSiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new in JavaScript 2023 - ES6
        </Text>
        </View>
        <Image 
       source={{
        uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      }}
    style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veritatis fugiat obcaecati odio dolores voluptatibus libero a provident eligendi iusto blanditiis, voluptate possimus consequuntur ab! Exercitationem est dolor natus quam!
          </Text>
        </View>
        <View style={styles.footerContainer}>
        <TouchableOpacity onPress={()=>{openWebsites('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}}>
           <Text style={styles.socialLinks}>
            Read More....
            </Text> 
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => openWebsites('https://www.instagram.com/hiteshchoudharyofficial/')}
            >
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage: {
        height: 190
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})