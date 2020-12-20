import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const BottomNavigation = () => {
  return (
    <>
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.text}>Home</Text>
        </View>
        <View style={style.content}>
          <Text style={style.text}>Search</Text>
        </View>
        <View style={style.content}>
          <Text style={style.text}>Coming Soon</Text>
        </View>
        <View style={style.content}>
          <Text style={style.text}>Download</Text>
        </View>
        <View style={style.content}>
          <Text style={style.text}>More</Text>
        </View>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    backgroundColor: '#131313',
  },
  text: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'rgb(224,224,224)',
  },
  content: {
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
  },
  logo: {
    width: 40,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default BottomNavigation;
