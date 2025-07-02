import * as React from 'react';
import {
  Text,
  View,
  StyleSheet, 
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';
const Tab = createMaterialTopTabNavigator();
const UserPosts = [
  {
    id: 1,
    image_url: 'https://picsum.photos/300',
  },
  {
    id: 2,
    image_url: 'https://picsum.photos/301',
  },
  {
    id: 3,
    image_url: 'https://picsum.photos/302',
  },
  {
    id: 4,
    image_url: 'https://picsum.photos/304',
  },
  {
    id: 5,
    image_url: 'https://picsum.photos/305',
  },
  {
    id: 6,
    image_url: 'https://picsum.photos/306',
  },
  {
    id: 7,
    image_url: 'https://picsum.photos/307',
  },
  {
    id: 8,
    image_url: 'https://picsum.photos/308',
  },
  {
    id: 9,
    image_url: 'https://picsum.photos/309',
  },
  {
    id: 10,
    image_url: 'https://picsum.photos/310',
  },
];
// Tab Screens
function PostTab() {
  const renderPost = ({ item }) => (
   
    <View style={styles.UserOwnPost}>
      <Image source={{ uri: item.image_url }} style={styles.UserOwnPostImg} />
    </View>
  );
  return (
     
      <View style={styles.tabContent}>
      <ScrollView>
        <View style={styles.UserOwnPostList}>
        
          <FlatList 
            data={UserPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPost}
          numColumns={3}
          />
         
        </View>
         </ScrollView>
      </View>
     
      
  );
}

function VideoTab() {
   const renderPost = ({ item }) => (
   
    <View style={styles.UserOwnPost}>
      <Image source={{ uri: item.image_url }} style={styles.UserOwnPostImg} />
    </View>
  );
  return (
    <View style={styles.tabContent}>
      <ScrollView>
        <View style={styles.UserOwnPostList}>
        
          <FlatList 
            data={UserPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPost}
          numColumns={3}
          />
         
        </View>
         </ScrollView>
      </View>
  );
}

function TaggedTab() {
   const renderPost = ({ item }) => (
   
    <View style={styles.UserOwnPost}>
      <Image source={{ uri: item.image_url }} style={styles.UserOwnPostImg} />
    </View>
  );
  return (
    <View style={styles.tabContent}>
      <ScrollView>
        <View style={styles.UserOwnPostList}>
        
          <FlatList 
            data={UserPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPost}
          numColumns={3}
          />
         
        </View>
         </ScrollView>
      </View>
  );
}
// Main ProfileScreen with tabs
export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10, }}>
      <Tab.Navigator
         screenOptions={({ route }) => ({
           tabBarShowLabel: false,
          tabBarActiveTintColor: '#333',
          tabBarIndicatorStyle: { backgroundColor: '#333' },
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarElevation: 0, // Android shadow Remove
          tabBarStyle: {
            elevation: 0,      // in Android shadow Remove
            shadowOpacity: 0,  // in iOS  shadow Remove
            borderBottomWidth: 0, // No underline  
          },
          tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Posts') {
          iconName = 'grid';
        }
        
         else if (route.name === 'Reels') {
          iconName = 'film'; 
        } 
         else if (route.name === 'Tagged') {
          iconName = 'tag';
        }

        return <Icon name={iconName} size={size} type="feather" color={color} />;
       
      },
        })} >
        
        <Tab.Screen name="Posts" component={PostTab} />
        <Tab.Screen name="Reels" component={VideoTab} />
        <Tab.Screen name="Tagged" component={TaggedTab} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1, 
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  UserOwnPostList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 2,
  },
  UserOwnPost: {
    width: '32%', // 3 columns
    aspectRatio: 1,
    margin: 2,
  },
  UserOwnPostImg: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
