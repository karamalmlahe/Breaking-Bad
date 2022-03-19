import React,{} from "react";
import {Text,View,TouchableOpacity,FlatList}from "react-native";
import{EpisodesDetailscScreen as Style}from '../../utility/appStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const EpisodesDetailscScreen = (props)=>{
    return (
        <View style={Style.container}>
            <View style={Style.TopView}>
                <View style={Style.BackBtn}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                        <MaterialIcons name='arrow-back-ios' size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'90%',alignItems: 'center',paddingRight:50}}>
                    <Text style={Style.Title}>Season {props.route.params.season} | Episode {props.route.params.episode}</Text>
                </View>
            </View>
            <View style={Style.episodeTitle}>
                <Text style={Style.episodeTitleText}>{props.route.params.title}</Text>
            </View>
            <View style={Style.ViewCh}>
                    <Text style={Style.Title}>Characters</Text>
                </View>
            <View style={{width:'100%',height:'35%',padding:20}}>
                <Text style={{fontSize:20,fontWeight:'100', fontFamily:'Chalkboard SE'}}>{props.route.params.characters.map((n) =>n + '\n')}</Text>
            </View>
        </View>
    )
}
export const ScreenOptions = navData=>{
    return{
        headerShown:false,
    }
}
export default EpisodesDetailscScreen;