import React from "react";
import {Text,View,TouchableOpacity,Image}from "react-native";
import{CharacterDetailsScreen as Style}from '../../utility/appStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const CharacterDetailsScreen = (props)=>{
    return (
        <View style={Style.container}>
            <View style={Style.TopView}>
                <View style={Style.BackBtn}>
                    <TouchableOpacity onPress={()=>props.navigation.goBack()} >
                        <MaterialIcons name='arrow-back-ios' size={25}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'90%',alignItems: 'center',paddingRight:50}}>
                    <Text style={Style.Title}>{props.route.params.name}</Text>
                </View>
            </View>
            <View style={{width:'100%',height:'90%'}}>
                <Image source={{uri: props.route.params.img}}style={Style.Img}/>
                    <View style={[Style.StatusView,{backgroundColor:props.route.params.statusColor}]}>
                        <Text style={Style.StatusText}>{props.route.params.status}</Text>
                    </View>
                    <View style={Style.Details}>
                        <Text style={Style.Text}>Name : <Text style={{fontWeight:'100'}}>{props.route.params.name}</Text></Text>
                        <Text style={Style.Text}>Nickname : <Text style={{fontWeight:'100'}}>{props.route.params.nickname}</Text></Text>
                        <Text style={Style.Text}>Portrayed : <Text style={{fontWeight:'100'}}>{props.route.params.portrayed}</Text></Text>
                        {props.route.params.appearance.length>0?(<Text style={Style.Text}>Appearance : <Text style={{fontWeight:'100'}}>
                            {
                                props.route.params.appearance.map((n) =>
                                 n!=props.route.params.appearance[props.route.params.appearance.length-1]?(n + ','):(n))
                            }
                        </Text></Text>):(
                            <Text></Text>
                        )
                        }
                    </View>
            </View>
        </View>
    )
}

export const ScreenOptions = navData=>{
    return{
        headerShown:false,
    }
}
export default CharacterDetailsScreen;