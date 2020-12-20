import React from 'react';
import {ScrollView} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import NavBar from '../components/NavBar';
import LoggedIn from '../../router/LoggedIn';

const BaseLayout = () => {
  return (
    <>
      <ScrollView style={{width: '100%', height: '100%'}}>
        <NavBar />
        <LoggedIn />
      </ScrollView>
      <BottomNavigation />
    </>
  );
};

export default BaseLayout;
