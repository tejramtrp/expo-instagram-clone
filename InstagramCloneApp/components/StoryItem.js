import React from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../assets/golden';

const users = [
  {
    id: 1,
    image_url: 'https://picsum.photos/300',
    name: 'Your Story',
    hasStory: true,
  },
  {
    id: 2,
    image_url: 'https://picsum.photos/301',
    name: 'Ajeet Paswan',
    hasStory: false,
  },
  {
    id: 3,
    image_url: 'https://picsum.photos/302',
    name: 'Saurabh Sharma',
  },
  {
    id: 4,
    image_url: 'https://picsum.photos/303',
    name: 'Kiran Sharma',
  },
  {
    id: 5,
    image_url: 'https://picsum.photos/304',
    name: 'Mauni Sharma',
  },
  {
    id: 6,
    image_url: 'https://picsum.photos/305',
    name: 'Vivek Sharma',
  },
  {
    id: 7,
    image_url: 'https://picsum.photos/306',
    name: 'Manoj Sharma',
  },
  {
    id: 8,
    image_url: 'https://picsum.photos/307',
    name: 'Manoj Vajpayi',
  },
];

export default function StoryItem() {
   const renderUser = ({ item }) => (
    <View style={styles.panelStoryBox}>
      <View style={styles.borderStyle}>
        <Image source={{ uri: item.image_url }} style={styles.panelStoryImg} />

        {item.hasStory && (
          <View style={styles.positionIcon}> 
            <TouchableOpacity>
              <Icon
                name="plus"
                style={styles.circlePlus}
                color="white"
                type="feather"
                size={18}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Text style={styles.panelStoryTitle}>{item.name}</Text>
    </View>
  );
  return (
     <View style={styles.panelStory}>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUser}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
  );
}