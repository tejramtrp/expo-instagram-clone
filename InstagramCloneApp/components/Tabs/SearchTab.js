import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const findTab = createMaterialTopTabNavigator();
const forYouContent = [
  {
    id: 1,
    image_url: 'https://picsum.photos/320',
  },
  {
    id: 2,
    image_url: 'https://picsum.photos/321',
  },
  {
    id: 3,
    image_url: 'https://picsum.photos/322',
  },
  {
    id: 4,
    image_url: 'https://picsum.photos/323',
  },
  {
    id: 5,
    image_url: 'https://picsum.photos/324',
  },
  {
    id: 6,
    image_url: 'https://picsum.photos/325',
  },
  {
    id: 7,
    image_url: 'https://picsum.photos/326',
  },
  {
    id: 8,
    image_url: 'https://picsum.photos/327',
  },
  {
    id: 9,
    image_url: 'https://picsum.photos/328',
  },
  {
    id: 10,
    image_url: 'https://picsum.photos/329',
  },
  {
    id: 11,
    image_url: 'https://picsum.photos/300',
  },
  {
    id: 12,
    image_url: 'https://picsum.photos/301',
  },
  {
    id: 13,
    image_url: 'https://picsum.photos/302',
  },
  {
    id: 14,
    image_url: 'https://picsum.photos/304',
  },
  {
    id: 15,
    image_url: 'https://picsum.photos/305',
  },
  {
    id: 16,
    image_url: 'https://picsum.photos/306',
  },
  {
    id: 17,
    image_url: 'https://picsum.photos/307',
  },
  {
    id: 18,
    image_url: 'https://picsum.photos/308',
  },
  {
    id: 19,
    image_url: 'https://picsum.photos/309',
  },
  {
    id: 20,
    image_url: 'https://picsum.photos/310',
  },
];
const accountsContent = [
  {
    id: 1,
    image_url: 'https://picsum.photos/300',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind',
  },
  {
    id: 2,
    image_url: 'https://picsum.photos/301',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind1',
  },
  {
    id: 3,
    image_url: 'https://picsum.photos/302',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind2',
  },
  {
    id: 4,
    image_url: 'https://picsum.photos/304',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind3',
  },
  {
    id: 5,
    image_url: 'https://picsum.photos/305',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind4',
  },
  {
    id: 6,
    image_url: 'https://picsum.photos/306',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind5',
  },
  {
    id: 7,
    image_url: 'https://picsum.photos/307',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind6',
  },
  {
    id: 8,
    image_url: 'https://picsum.photos/308',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind7',
  },
  {
    id: 9,
    image_url: 'https://picsum.photos/309',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind8',
  },
  {
    id: 10,
    image_url: 'https://picsum.photos/310',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind9',
  },
  {
    id: 11,
    image_url: 'https://picsum.photos/300',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind10',
  },
  {
    id: 12,
    image_url: 'https://picsum.photos/301',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind11',
  },
  {
    id: 13,
    image_url: 'https://picsum.photos/302',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind12',
  },
  {
    id: 14,
    image_url: 'https://picsum.photos/304',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind13',
  },
  {
    id: 15,
    image_url: 'https://picsum.photos/305',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind14',
  },
  {
    id: 16,
    image_url: 'https://picsum.photos/306',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind15',
  },
  {
    id: 17,
    image_url: 'https://picsum.photos/307',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind16',
  },
  {
    id: 18,
    image_url: 'https://picsum.photos/308',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind17',
  },
  {
    id: 19,
    image_url: 'https://picsum.photos/309',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind18',
  },
  {
    id: 20,
    image_url: 'https://picsum.photos/310',
    accountTitle: 'The Power of Mind',
    accountSubTitle: 'Main Power of Mind19',
  },
];
const reelsContent = [
  {
    id: 1,
    image_url: 'https://picsum.photos/300',
    reelsCounts: '25M',
  },
  {
    id: 2,
    image_url: 'https://picsum.photos/301',
    reelsCounts: '256K',
  },
  {
    id: 3,
    image_url: 'https://picsum.photos/302',
    reelsCounts: '4K',
  },
  {
    id: 4,
    image_url: 'https://picsum.photos/304',
    reelsCounts: '102K',
  },
  {
    id: 5,
    image_url: 'https://picsum.photos/305',
    reelsCounts: '2305',
  },
  {
    id: 6,
    image_url: 'https://picsum.photos/306',
    reelsCounts: '96',
  },
  {
    id: 7,
    image_url: 'https://picsum.photos/307',
    reelsCounts: '1M',
  },
  {
    id: 8,
    image_url: 'https://picsum.photos/308',
    reelsCounts: '2M',
  },
  {
    id: 9,
    image_url: 'https://picsum.photos/309',
    reelsCounts: '99K',
  },
  {
    id: 10,
    image_url: 'https://picsum.photos/310',
    reelsCounts: '9K',
  },
  {
    id: 11,
    image_url: 'https://picsum.photos/300',
    reelsCounts: '10',
  },
  {
    id: 12,
    image_url: 'https://picsum.photos/301',
    reelsCounts: '45K',
  },
  {
    id: 13,
    image_url: 'https://picsum.photos/302',
    reelsCounts: '12K',
  },
  {
    id: 14,
    image_url: 'https://picsum.photos/304',
    reelsCounts: '49K',
  },
  {
    id: 15,
    image_url: 'https://picsum.photos/305',
    reelsCounts: '9K',
  },
  {
    id: 16,
    image_url: 'https://picsum.photos/306',
    reelsCounts: '342',
  },
  {
    id: 17,
    image_url: 'https://picsum.photos/307',
    reelsCounts: '234',
  },
  {
    id: 18,
    image_url: 'https://picsum.photos/308',
    reelsCounts: '39K',
  },
  {
    id: 19,
    image_url: 'https://picsum.photos/309',
    reelsCounts: '19K',
  },
  {
    id: 20,
    image_url: 'https://picsum.photos/310',
    reelsCounts: '29K',
  },
];
const audioContent = [
  {
    id: 1,
    image_url: 'https://picsum.photos/300',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 10,
  },
  {
    id: 2,
    image_url: 'https://picsum.photos/301',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1,
  },
  {
    id: 3,
    image_url: 'https://picsum.photos/302',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 3,
  },
  {
    id: 4,
    image_url: 'https://picsum.photos/304',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 11,
  },
  {
    id: 5,
    image_url: 'https://picsum.photos/305',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 250,
  },
  {
    id: 6,
    image_url: 'https://picsum.photos/306',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 300,
  },
  {
    id: 7,
    image_url: 'https://picsum.photos/307',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 160,
  },
  {
    id: 8,
    image_url: 'https://picsum.photos/308',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 136,
  },
  {
    id: 9,
    image_url: 'https://picsum.photos/309',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 362,
  },
  {
    id: 10,
    image_url: 'https://picsum.photos/310',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 110,
  },
  {
    id: 11,
    image_url: 'https://picsum.photos/300',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 2010,
  },
  {
    id: 12,
    image_url: 'https://picsum.photos/301',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1360,
  },
  {
    id: 13,
    image_url: 'https://picsum.photos/302',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 100,
  },
  {
    id: 14,
    image_url: 'https://picsum.photos/304',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 263,
  },
  {
    id: 15,
    image_url: 'https://picsum.photos/305',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 2510,
  },
  {
    id: 16,
    image_url: 'https://picsum.photos/306',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1250,
  },
  {
    id: 17,
    image_url: 'https://picsum.photos/307',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1250,
  },
  {
    id: 18,
    image_url: 'https://picsum.photos/308',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1250,
  },
  {
    id: 19,
    image_url: 'https://picsum.photos/309',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1250,
  },
  {
    id: 20,
    image_url: 'https://picsum.photos/310',
    audioTitle: 'The Power of Mind',
    audioSubTitle: 'Main Power of Mind19',
    reelsCount: 1250,
  },
];

const tagsContent = [
  {
    id: 1,
    hashTagTitle: 'ThinkingOfPower',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 2,
    hashTagTitle: 'ThinkingOfPowerKings',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 3,
    hashTagTitle: 'TheThinkingOfPower',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 4,
    hashTagTitle: 'MostThinkingOfPower',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 5,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 6,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 7,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 8,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 9,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 10,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 11,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 12,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 13,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 14,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 15,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 16,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
  {
    id: 17,
    hashTagTitle: 'The_Thinking_Of_Power',
    hashTagSubTitle: '1000+ Post',
  },
];
const placesContent = [
  {
    id: 1,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Punjab, India',
  },
  {
    id: 2,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'UP, India',
  },
  {
    id: 3,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Delhi, India',
  },
  {
    id: 4,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Punjab, India',
  },
  {
    id: 5,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'MP, India',
  },
  {
    id: 6,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Pentagun, UK',
  },
  {
    id: 7,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'J&K, India',
  },
  {
    id: 8,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Punjab, India',
  },
  {
    id: 9,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Nainital, India',
  },
  {
    id: 10,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Punjab, India',
  },
  {
    id: 11,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Kanpur, India',
  },
  {
    id: 12,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Jaunpur, India',
  },
  {
    id: 13,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Siligudi, India',
  },
  {
    id: 14,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'MachliSahar, India',
  },
  {
    id: 15,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Noida, India',
  },
  {
    id: 16,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Bihar, India',
  },
  {
    id: 17,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Laddakha, India',
  },
  {
    id: 18,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Chnadigarh Punjab, India',
  },
  {
    id: 19,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Punjab, India',
  },
  {
    id: 20,
    placesTitle: 'ThinkingOfPower',
    placesSubTitle: 'Haryana, India',
  },
];
// Tab Screens
function forYouTab() {
  const renderSearch = ({ item }) => (
    <View style={searchStyles.UserOwnPost}>
      <Image
        source={{ uri: item.image_url }}
        style={searchStyles.UserOwnPostImg}
      />
    </View>
  );
  return (
    <View style={searchStyles.tabContent}>
      <ScrollView>
        <View style={searchStyles.UserOwnPostList}>
          <FlatList
            data={forYouContent}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearch}
            numColumns={3}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function accountsTab() {
  const renderSearch = ({ item }) => (
    <View style={searchStyles.accountSection}>
      <Image
        source={{ uri: item.image_url }}
        style={searchStyles.accountSectionImg}
      />
      <View style={searchStyles.MainTitleTxt}>
        <Text style={searchStyles.accountsBoldTxt}>{item.accountTitle}</Text>
        <Text style={searchStyles.accountsNormalTxt}>
          {item.accountSubTitle}
        </Text>
      </View>
    </View>
  );
  return (
    <View style={searchStyles.tabContent}>
      <ScrollView>
        <View style={searchStyles.UserOwnPostList}>
          <FlatList
            data={accountsContent}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearch}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function reelsTab() {
  const renderSearch = ({ item }) => (
    <View style={searchStyles.UserOwnPost}>
      <Image
        source={{ uri: item.image_url }}
        style={searchStyles.UserOwnPostImg}
      />
      <Text style={searchStyles.reelsCountsTxt}>
        <Icon
          style={searchStyles.eye}
          name="eye"
          type="feather"
          size={14}
          color="#fff"
        />{' '}
        {item.reelsCounts}
      </Text>
    </View>
  );
  return (
    <View style={searchStyles.tabContent}>
      <ScrollView>
        <View style={searchStyles.UserOwnPostList}>
          <FlatList
            data={reelsContent}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearch}
            numColumns={3}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function audioTab() {
  const renderSearch = ({ item }) => (
    <View style={searchStyles.audioSection}>
      <Image
        source={{ uri: item.image_url }}
        style={searchStyles.audioSectionImg}
      />
      <View style={searchStyles.MainTitleTxt}>
        <Text style={searchStyles.audioBoldTxt}>{item.audioTitle}</Text>
        <Text style={searchStyles.audioNormalTxt}>
          {item.audioSubTitle}
          <Text style={searchStyles.reelsCount}>* {item.reelsCount} Reels</Text>
        </Text>
      </View>
    </View>
  );
  return (
    <View style={searchStyles.tabContent}>
      <ScrollView>
        <View style={searchStyles.UserOwnPostList}>
          <FlatList
            data={audioContent}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearch}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function tagsTab() {
  const renderSearch = ({ item }) => (
    <View style={searchStyles.tagsSection}>
      <Text style={searchStyles.tagsSectionImg}>#</Text>
      <View style={searchStyles.MainTitleTxt}>
        <Text style={searchStyles.tagsBoldTxt}>#{item.hashTagTitle}</Text>
        <Text style={searchStyles.tagsNormalTxt}>{item.hashTagSubTitle} </Text>
      </View>
    </View>
  );
  return (
    <View style={searchStyles.tabContent}>
      <ScrollView>
        <View style={searchStyles.UserOwnPostList}>
          <FlatList
            data={tagsContent}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearch}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </View>
  );
}
function placesTab() {
  const renderSearch = ({ item }) => (
    <View style={searchStyles.placesSection}>
      <Text style={searchStyles.placesSectionImg}>
        <Icon
          style={searchStyles.placesIcon}
          name="map-pin"
          type="feather"
          size={18}
          color="#000"
        />
      </Text>
      <View style={searchStyles.MainTitleTxt}>
        <Text style={searchStyles.tagsBoldTxt}>#{item.placesTitle}</Text>
        <Text style={searchStyles.tagsNormalTxt}>{item.placesSubTitle} </Text>
      </View>
    </View>
  );
  return (
    <View style={searchStyles.tabContent}>
      <ScrollView>
        <View style={searchStyles.UserOwnPostList}>
          <FlatList
            data={placesContent}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderSearch}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </View>
  );
}
// Main ProfileScreen with tabs
export default function SearchTab() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
  <findTab.Navigator
    screenOptions={({ route }) => ({
      tabBarShowLabel: true,
      tabBarScrollEnabled: true,
      tabBarActiveTintColor: '#333',
      tabBarIndicatorStyle: { backgroundColor: '#333'},
      tabBarLabelStyle: { fontWeight: 'normal' },
      tabBarElevation: 0,
      tabBarStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        paddingVertical: 0,
        paddingHorizontal: 0,
        marginHorizontal: 0, 
        textAlign: 'center',
      },
      tabBarItemStyle: {
      width: 'auto',
      paddingHorizontal: 10, 
      marginHorizontal: 0,
    },
    })}
  >
    <findTab.Screen name="For you" component={forYouTab} />
    <findTab.Screen name="Accounts" component={accountsTab} />
    <findTab.Screen name="Audio" component={audioTab} />
    <findTab.Screen name="Reels" component={reelsTab} />
    <findTab.Screen name="Tags" component={tagsTab} />
    <findTab.Screen name="Places" component={placesTab} />
  </findTab.Navigator>
</View>

  );
}

const searchStyles = StyleSheet.create({
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
  /*Accounts CSS*/
  accountSection: {
    width: '100%', // 3 columns
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  accountSectionImg: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  MainTitleTxt: {
    marginLeft: 10,
  },
  accountsBoldTxt: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  accountsNormalTxt: {
    fontSize: 10,
  },
  /*Audio CSS*/
  audioSection: {
    width: '100%', // 3 columns
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  audioSectionImg: {
    width: 48,
    height: 48,
    borderRadius: 6,
  },
  audioBoldTxt: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  audioNormalTxt: {
    fontSize: 10,
  },
  reelsCount: {
    marginLeft: 10,
  },
  /*Reels CSS*/
  reelsCountsTxt: {
    position: 'absolute',
    bottom: 5,
    left: 5,
    color: '#fff',
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },
  eye: {
    marginBottom: -3,
    marginRight: 2,
  },
  /*tags CSS*/
  tagsSection: {
    width: '100%', // 3 columns
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tagsSectionImg: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 46,
    fontSize: 24,
  },
  tagsBoldTxt: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  tagsNormalTxt: {
    fontSize: 10,
  },
  /*Places CSS*/
  placesSection: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  placesSectionImg: {
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#eee',
  },
  placesIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginHorizontal: 15,
  },
});
