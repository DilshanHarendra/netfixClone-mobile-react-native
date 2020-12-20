import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

const NavBar = () => {
  return (
    <>
      <View style={style.container}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png',
          }}
          style={style.logo}
        />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={style.content}>
            <Text style={style.text}>Tv Show</Text>
          </View>
          <View style={style.content}>
            <Text style={style.text}>Movies</Text>
          </View>
          <View style={style.content}>
            <Text style={style.text}>My List</Text>
          </View>
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
    position: 'absolute',
    top: 50,
    left: 0,
    zIndex: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(224,224,224)',
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 20,
    borderRadius: 5,
  },
  logo: {
    width: 40,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default NavBar;
