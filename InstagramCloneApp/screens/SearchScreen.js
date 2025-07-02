import React, { useState } from 'react';
import { View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import SearchTab from '../components/Tabs/SearchTab';
import styles from '../assets/golden';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  return (
     
       <>
        <SafeAreaView style={styles.container}>
        <View style={searchStyles.searchContainer}>
          <Icon
            name="search"
            size={20}
            color="#888"
            style={searchStyles.icon}
          />
          <TextInput
            style={searchStyles.input}
            placeholder="Search here..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <SearchTab />
         </SafeAreaView>
        </>
      
     
  );
}

const searchStyles = StyleSheet.create({
  
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 10,
    marginTop: 20,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
 
});
