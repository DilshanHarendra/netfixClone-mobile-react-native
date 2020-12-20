import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import HeroSection from './HeroSection';
import MovieRow from '../components/MovieRow';

const Home = () => {
  return (
    <>
      <HeroSection />
      <MovieRow />
    </>
  );
};
const style = StyleSheet.create({});

export default Home;
