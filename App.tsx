import { SafeAreaView, View, Text, ScrollView } from 'react-native'
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      {/* <Text>Usha</Text> */}
      <FlatCard/>
      <ElevatedCard />
      <FancyCards />
      <FancyCards />
      <FancyCards />
      <ActionCards />
      <ContactList />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App