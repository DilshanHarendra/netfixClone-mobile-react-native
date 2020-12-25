import React from 'react';
import {ScrollView} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import NavBar from '../components/NavBar';
import LoggedIn from '../../router/LoggedIn';
import {View} from 'react-native';
const BaseLayout = () => {
  return (
    <View style={{backgroundColor: '#0f0f0f'}}>
      <NavBar />
      <ScrollView style={{width: '100%', height: '100%'}}>
        <LoggedIn />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

export default BaseLayout;
