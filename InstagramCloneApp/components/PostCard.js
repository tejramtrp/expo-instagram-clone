import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
 import {Icon } from 'react-native-elements';
import styles from '../assets/golden';

export default function PostCard({ posts }) {
  const renderItem = ({ item }) => (
    <View style={styles.cardList}>
      <View style={styles.cardListHeader}>
        <View style={styles.cardListHeaderLeft}>
          <Image
            source={{ uri: item.user_url }}
            style={styles.cardListHeaderLeftImg}
          />
          <View style={styles.userTextInfo}>
            <Text style={styles.cardListHeaderLeftTitle}>{item.user}</Text>
            <Text style={styles.cardListHeaderLeftLocate}>{item.location}</Text>
          </View>
        </View>
        <View style={styles.cardListHeaderRight}>
          <TouchableOpacity>
            <Icon
              name="more-horizontal"
              type="feather"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardListBody}>
        <Image
          source={{ uri: item.image_url }}
          style={styles.cardListBodyImg}
        />
      </View>
      <View style={styles.cardListFooter}>
        <View style={styles.cardListFooterBox}>
          <View style={styles.cardListFooterLeft}>
            <TouchableOpacity>
              <Icon
                name="heart"
                type="feather"
                style={styles.leftIcon}
                size={18}
                color="#000"
              />{' '}
            </TouchableOpacity>
            <Text> {item.likes}</Text>

            <TouchableOpacity>
              {' '}
              <Icon
                name="message-circle"
                type="feather"
                style={styles.leftIcon}
                size={18}
                color="#000"
              />{' '}
            </TouchableOpacity>
            <Text>{item.comments}</Text>
            <TouchableOpacity>
              {' '}
              <Icon
                name="send"
                type="feather"
                style={styles.leftIcon}
                size={18}
                color="#000"
              />{' '}
            </TouchableOpacity>
            <Text>{item.share}</Text>
          </View>
          <View style={styles.cardListFooterRight}>
            <TouchableOpacity>
              {' '}
              <Icon
                name="bookmark"
                type="feather"
                style={styles.leftIcon}
                size={18}
                color="#000"
              />{' '}
            </TouchableOpacity>
            <Text>{item.share}</Text>
          </View>
        </View>

        <Text style={styles.ParaText}>
          {' '}
          @{item.user}
          <Text style={styles.normalText}> {item.caption}...</Text>
        </Text>
      </View>
    </View>
  );
    return (
        <View style={styles.panelBody}>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
        </View>
   );
}