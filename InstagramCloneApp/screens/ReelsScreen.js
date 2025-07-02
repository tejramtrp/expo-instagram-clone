import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Icon } from 'react-native-elements';
import { Video } from 'expo-av'; // ✅ अब सही

import styles from '../assets/golden';

const { height, width } = Dimensions.get('window');

const reelsData = [
  {
    id: 1,
    user: 'Tejram Paswan',
    caption: 'React Native Reels Demo 🔥',
    video_url:
      'https://videos.pexels.com/video-files/31318424/13369588_1440_2560_30fps.mp4',
    likes: 120,
    comments: 35,
  },
  {
    id: 2,
    user: 'Anchal Saroj',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/31985718/13630581_1440_2560_30fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 3,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/7565637/7565637-hd_1080_1920_25fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 4,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/32157392/13711317_1440_2560_30fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 5,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/32755709/13964552_1440_2560_30fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 6,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/4623150/4623150-uhd_1440_2560_30fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 7,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/31387610/13393358_1080_1920_30fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 8,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/25721768/11903912_1440_2560_60fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 9,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/5874502/5874502-uhd_1440_2732_30fps.mp4',
    likes: 300,
    comments: 22,
  },
  {
    id: 10,
    user: 'Tejas Paswan',
    caption: 'Follow for more UI/UX tips!',
    video_url:
      'https://videos.pexels.com/video-files/7576789/7576789-uhd_1440_2560_30fps.mp4',
    likes: 300,
    comments: 22,
  },
];

const ReelItem = ({ reel }) => (
  <View style={styles.videoContainer}>
    <Video
      source={{ uri: reel.video_url }}
      style={[reelsStyles.video, { width: '100%', aspectRatio: 9 / 16 }]}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
    />

    <View style={styles.overlay}>
      <View style={styles.leftInfo}>
        <Text style={styles.usernames}>@{reel.user}</Text>
        <Text style={styles.caption}>{reel.caption}</Text>
      </View>
      <View style={styles.rightIcons}>
        <Pressable onPress={() => alert('Liked!')}>
          <Icon name="heart" type="feather" color="#fff" size={28} />
        </Pressable>
        <Text style={styles.iconText}>{reel.likes}</Text>
        <Icon name="message-circle" type="feather" color="#fff" size={28} />
        <Text style={styles.iconText}>{reel.comments}</Text>
        <Icon name="send" type="feather" color="#fff" size={28} />
      </View>
    </View>
    <LinearGradient
      colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}
      style={reelsStyles.overlayGradient}
    />
  </View>
);

export default function ReelsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.notch}>
        <View style={styles.reelsLogo}>
          <Text style={styles.username}>For you</Text>
          <Icon
            name="chevron-down"
            type="feather"
            style={styles.reelsArrow}
            size={15}
            color="#000"
          />
        </View>
        <View style={styles.reelsRight}>
          <Icon name="camera" type="feather" size={20} color="#000" />
        </View>
      </View>

      <View style={reelsStyles.videoContainerBox}>
        <FlatList
          data={reelsData}
          keyExtractor={(item, index) =>
            item?.id?.toString() || index.toString()
          }
          renderItem={({ item }) => <ReelItem reel={item} />}
          pagingEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
const reelsStyles = StyleSheet.create({
  videoContainerBox: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  video: {
    width: '100%',
    height: Dimensions.get('window').height * 0.9999, //
    alignSelf: 'center',
  },
  overlayGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height * 0.4,
    zIndex: 1,
  },
});
