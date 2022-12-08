import React, {useLayoutEffect, useState, useRef, useEffect} from "react";
import {View, Text, StyleSheet, Animated, Easing, TouchableWithoutFeedback} from "react-native";
import Anime from 'react-native-anime';
import Constants from "../../../../const/Constants";
import Svg, {G,Path} from 'react-native-svg';


function Scaffolding() {
    return (
        <Svg height="100%" width="100%" fill="none" >
            <G transform="scale(1.3)"x="37"y="230">
                <Path d={Constants.brain} stroke="#d0c89d"strokeLinecap="round"strokeLinejoin="round"strokeWidth="1.255"/>
            </G>  
        </Svg>

    )
}
 
 const styles = StyleSheet.create({
 });
 
 export default Scaffolding