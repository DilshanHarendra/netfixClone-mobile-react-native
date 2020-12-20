import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {vw, vh} from 'react-native-css-vh-vw';
const MovieRow = () => {
  return (
    <>
      <View style={style.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={style.cover}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={style.cover}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={style.cover}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={style.cover}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={style.cover}
          />
          <Image
            source={{
              uri:
                'https://www.coverwhiz.com/uploads/movies/Thor-The-Dark-World.jpg',
            }}
            style={style.cover}
          />
        </ScrollView>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  cover: {
    width: vw(30),
    height: vh(20),
    resizeMode: 'cover',
    paddingLeft: 5,
    marginRight: 5,
  },
});

export default MovieRow;
