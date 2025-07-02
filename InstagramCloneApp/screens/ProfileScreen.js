import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Text, Icon } from 'react-native-elements';
import ProfileTab from '../components/Tabs/ProfileTab';
import styles from '../assets/golden';
  const ProfileButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
export default function ProfileScreen() {

  const StatItem = ({ value, label }) => (
  <View style={styles.dataListItem}>
    <Text style={styles.dataListItemBold}>{value}</Text>
    <Text style={styles.dataListItemRegular}>{label}</Text>
  </View>
);
  return (
    <>
      <StatusBar backgroundColor="#fafafa" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <View style={styles.notch}>
          <View style={styles.containerLogo}>
            <Text style={styles.username}> tejram_trp </Text>
            <Icon
              name="chevron-down"
              type="feather"
              style={styles.userArrow}
              size={15}
              color="#000"
            />
          </View>
          <View style={styles.containerRight}>
            <Icon name="plus-circle" type="feather" size={24} color="#000" />
            <Icon name="menu" type="feather" size={24} color="#000" />
          </View>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileRow}>
            <View style={styles.profileUser}>
              <Image
                source={{ uri: 'https://picsum.photos/300' }}
                style={styles.profileImage}
              />
            </View>

        <View style={styles.profileDataList}>
          <StatItem value="10" label="Post" />
          <StatItem value="500" label="Likes" />
          <StatItem value="90" label="Followers" />
          <StatItem value="6" label="Following" />
        </View>
          </View>
        </View>
        <View style={styles.profileInfoText}>
          <Text style={styles.profileTxt}>{'UIUX Developer'} </Text>
          <Text style={styles.profileTxt}>{'React Native UI Designer'} </Text>
          <Text style={styles.profileTxt}>
            Designer is where science and art break even {'\n'}
            -Robin Mathew, Designer
          </Text>
        </View>
        <View style={styles.profileInfoBtn}>
          <ProfileButton title="Edit Profile" onPress={() => alert('Edit')} />
          <ProfileButton title="Share Profile" onPress={() => alert('Share')} />
        </View>

        <ProfileTab />
      </SafeAreaView>
    </>
  );
}
