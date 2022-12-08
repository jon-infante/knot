import React, {useLayoutEffect, Fragment} from "react";
import {View, Text, StyleSheet} from "react-native";
import { Image } from 'react-native';


function HomeScreen({}) {

  return (
    <Fragment>
    <View></View>
    <Text>Hi</Text>
    <Image
      source={{uri: '../static/assets/kbot/FinalKnotStripes.svg'}}
      style={{width: 300, height: 200}}
    />
    </Fragment>
  );
};


export default HomeScreen;