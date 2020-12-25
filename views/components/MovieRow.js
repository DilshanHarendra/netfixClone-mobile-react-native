import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {vw, vh} from 'react-native-css-vh-vw';
const MovieRow = (props) => {
  return (
    <View style={{marginBottom: 30}}>
      <Text style={style.title}>{props.title}</Text>
      <View style={style.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={{
              ...style.cover,
              width: vw(props.width) || vw(30),
              height: vh(props.height) || vh(20),
            }}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={{
              ...style.cover,
              width: vw(props.width) || vw(30),
              height: vh(props.height) || vh(20),
            }}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={{
              ...style.cover,
              width: vw(props.width) || vw(30),
              height: vh(props.height) || vh(20),
            }}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={{
              ...style.cover,
              width: vw(props.width) || vw(30),
              height: vh(props.height) || vh(20),
            }}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={{
              ...style.cover,
              width: vw(props.width) || vw(30),
              height: vh(props.height) || vh(20),
            }}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={{
              ...style.cover,
              width: vw(props.width) || vw(30),
              height: vh(props.height) || vh(20),
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d5d6d7',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  cover: {
    resizeMode: 'cover',
    paddingLeft: 5,
    marginRight: 10,
  },
});

export default MovieRow;
