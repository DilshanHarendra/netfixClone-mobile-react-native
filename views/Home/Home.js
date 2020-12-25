import React from 'react';
import {StyleSheet} from 'react-native';
import HeroSection from './HeroSection';
import MovieRow from '../components/MovieRow';
import {View} from 'react-native';
const Home = () => {
  return (
    <View style={{paddingBottom: 50}}>
      <HeroSection />
      <MovieRow title="Popular On Netflix" />
      <MovieRow title="Category 1" height={20} width={30} />
      <MovieRow title="Category 2" />
      <MovieRow title="Category 3" />
    </View>
  );
};
const style = StyleSheet.create({});

export default Home;
