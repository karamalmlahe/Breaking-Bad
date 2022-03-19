import React,{useState,useEffect} from "react";
import {Text,View,Image,ActivityIndicator}from "react-native";
import{LoadingScreen as Style}from '../../utility/appStyle';
const LoadingScreen = (props)=>{
    return (
        <View style={Style.container}>
            <View style={Style.ImgView}>
            <Image style={Style.Img} source={require('../../img/Breaking_Bad_logo.svg.png')} />
            </View>
            <View style={Style.Loading}>
                <ActivityIndicator size='large' color='black' />
            </View>
        </View>
    )
}
export const ScreenOptions = navData=>{
    return{
    }
}
export default LoadingScreen;