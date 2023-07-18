import React, {useLayoutEffect, useState, useRef, useEffect} from "react";
import {View, Text, StyleSheet,Animated, Easing } from "react-native";
import anime from 'animejs';
import Constants from "../../../../const/Constants";
import Svg, {G,Path} from 'react-native-svg';
import Anime from 'react-native-anime';


function Strips() {
  let h = Constants.ScreenHeight
  let w = Constants.ScreenWidth
  OIBuddy = Constants.models[0]
  OLarge = Constants.models[1]
  OOutside = Constants.models[3]
  OISwirl = Constants.models[4]
  OLast = Constants.models[2]
  OLilMan = Constants.models[5]
  BFinalInner = Constants.models[6]
  BInnerRing = Constants.models[7]
  BLargeOuterBand = Constants.models[8]
  BLittleInner = Constants.models[9]
  l2lobea = Constants.l2lobe[0]
  l2lobeb = Constants.l2lobe[1]


  knot= Constants.knot
  return (
    <View style={styles.container}>  
      <Svg height="100%" width="100%" fill="none" >
        {/* Core Structure */}
        <G transform="scale(0.6)"x="232" y="319">
          <Path d={OIBuddy} stroke="#fffafa"strokeLinecap="round"strokeLinejoin="round"strokeWidth="5"/>
        </G>
        <G transform="scale(2.55)"x="63"y="230">
          <Path d={OLarge} stroke="#fffafa"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.1"/>
        </G>
        <G transform="scale(2.55)"x="40"y="232">
          <Path d={OOutside} stroke="#fffafa"strokeLinecap="round" strokeLinejoin="round"strokeWidth="1.1"/>
        </G>
        <G transform="scale(2.55)"x="133"y="310">
          <Path d={OISwirl} stroke="#fffafa" trokeLinecap="round"strokeLinejoin="round"strokeWidth="1.1"/>
        </G>
        <G transform="scale(0.95)"x="226"y="324">
          <Path d={OLast} stroke="#fffafa"strokeLinecap="round"strokeLinejoin="round"strokeWidth="2.5"/>  
        </G>
        <G transform="scale(2.2)"x="85"y="375">
          <Path d={OLilMan} stroke="#fffafa"  strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.35"/> 
        </G> 
        <G transform="scale(2.55)"x="218"y="326">
          <Path d={BFinalInner} stroke="#d0c89d" strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.2"/>
        </G>
        <G transform="scale(0.253)"x="180"y="337">
          <Path d={BInnerRing} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="12"/>
        </G>
        <G transform="scale(0.255)"x="142" y="297">
          <Path d={BLargeOuterBand} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="12"/>
        </G>
        <G transform="scale(2.6)"x="220"y="326">
          <Path d={BLittleInner} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.15"/>
        </G>
          <G transform="scale(0.255)"x="37"y="230">
            <Path d={knot} stroke="#000000"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.255"/>
          </G>  
          {/* L2 Lobe Long Strains */}
          <G transform="scale(2.55)"x="131"y="307">
            <Path d={l2lobea} stroke="#000000"strokeLinecap="round"strokeLinejoin="round"strokeWidth="0.75"/>
          </G> 
          <G transform="scale(2.55)"x="131"y="207">
            <Path d={l2lobeb} stroke="#000000"strokeLinecap="round"strokeLinejoin="round"strokeWidth="0.75"/>
          </G> 
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "#84a797"
}
});

export default Strips;
