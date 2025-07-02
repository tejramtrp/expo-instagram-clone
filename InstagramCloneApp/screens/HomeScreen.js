import React from 'react';
import { 
  SafeAreaView,  
  StatusBar,
} from 'react-native'; 
import styles from '../assets/golden';
import Header from '../components/Header';
import PostCard from '../components/PostCard'; 
import StoryItem from '../components/StoryItem';
const posts = [
  {
    id: 1,
    user_url: 'https://picsum.photos/300',
    image_url: 'https://picsum.photos/300',
    caption: 'Testing fake Instagram post',
    user: 'Tejram Paswan',
    location: 'Jaunpur, UP',
    likes: 10, 
    comments: 10,
    share: 10,
  },
  {
    id: 2,
    user_url: 'https://picsum.photos/301',
    image_url: 'https://picsum.photos/301',
    caption: 'Another post caption here',
    user: 'Rajesh Misra',
    location: 'Kanpur, UP',
    likes: 25,
    comments: 33,
    share: 2,
  },
  {
    id: 3,
    user_url: 'https://picsum.photos/302',
    image_url: 'https://picsum.photos/302',
    caption: 'Another post caption here',
    user: 'Raj Kumar',
    location: 'Hisar, HR',
    likes: 25,
    comments: 33,
    share: 3,
  },
  {
    id: 4,
    user_url: 'https://picsum.photos/304',
    image_url: 'https://picsum.photos/304',
    caption: 'Another post caption here',
    user: 'Mahesh Sharma',
    location: 'Balia, UP',
    likes: 25,
    comments: 33,
    share: 1,
  },
  {
    id: 5,
    user_url: 'https://picsum.photos/305',
    image_url: 'https://picsum.photos/305',
    caption: 'Another post caption here',
    user: 'Rajesh Mishra',
    location: 'Kanpur, UP',
    likes: 25,
    comments: 33,
    share: 10,
  },
  {
    id: 6,
    user_url: 'https://picsum.photos/306',
    image_url: 'https://picsum.photos/306',
    caption: 'Another post caption here',
    user: 'Abhay Mishra',
    location: 'Patna, BR',
    likes: 25,
    comments: 33,
    share: 6,
  },
  {
    id: 7,
    user_url: 'https://picsum.photos/307',
    image_url: 'https://picsum.photos/307',
    caption: 'Another post caption here',
    user: 'Ranjeet Maurya',
    location: 'Jabalpur, MP',
    likes: 25,
    comments: 33,
    share: 23,
  },
  {
    id: 8,
    user_url: 'https://picsum.photos/308',
    image_url: 'https://picsum.photos/308',
    caption: 'Another post caption here',
    user: 'Rajat Sharma',
    location: 'Gorakhpur, UP',
    likes: 25,
    comments: 33,
    share: 1,
  },
  {
    id: 9,
    user_url: 'https://picsum.photos/309',
    image_url: 'https://picsum.photos/309',
    caption: 'Another post caption here',
    user: 'Kapil Mishra',
    location: 'Azamgarh, UP',
    likes: 25,
    comments: 33,
    share: 10,
  },
  {
    id: 10,
    user_url: 'https://picsum.photos/310',
    image_url: 'https://picsum.photos/310',
    caption: 'Another post caption here',
    user: 'Rajkumar Rao',
    location: 'Jaunpur, UP',
    likes: 25,
    comments: 33,
    share: 11,
  },
];
export default function App() { 
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <Header /> 
        <StoryItem /> 
        <PostCard posts={posts} />
      </SafeAreaView>
    </>
  );
}
