import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {vw} from 'react-native-css-vh-vw';
const HeroSection = () => {
  return (
    <>
      <View style={style.wrapper}>
        <Image
          source={{
            uri:
              'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
          }}
          style={style.image}
        />
        <View style={style.imageOverlay}>
          <View style={style.headerTopic}>
            <Text style={style.topic}>Topic</Text>
          </View>
        </View>
      </View>
      <View style={style.action}>
        <View style={{width: vw(33)}}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text> Play </Text>
          </TouchableOpacity>
        </View>
        <View style={{width: vw(33)}}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text> Play </Text>
          </TouchableOpacity>
        </View>

        <View style={{width: vw(33)}}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text> Play </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  wrapper: {
    width: '100%',
    height: 500,
  },
  topic: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  headerTopic: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
  },
});

export default HeroSection;
