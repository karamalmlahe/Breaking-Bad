import React,{useState,useEffect} from "react";
import {Text,View,Image,ActivityIndicator} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import{CharactersScreen as Style}from '../../utility/appStyle';
//import Dataa from '../Loading';
const CharactersScreen =  (props)=>{
    const[Data,setData]=useState([]);
    const[Loading,setLoading]=useState();
    const Color= (status)=>
    {
           switch(status)
            {
            case 'Presumed dead': 
                return '#ffcc00'
            case 'Alive':
                return '#90be3f'
            case 'Deceased':
                return '#c21304'

            case 'Unknown':return 'skyblue'
            }
    }
    useEffect( async () => {
        setLoading(true)
            const response=  await fetch('https://www.breakingbadapi.com/api/characters',{
                method: 'GET'})
            .then(res=>res.json())
            .then(data=>setData(data))
        setLoading(false)
      },[]);
    return (
    <View style={Style.container}>
            <View style={Style.ImgView}>
                <Image style={Style.Img} source={require('../../img/Breaking_Bad_logo.svg.png')}/>
                <View style={Style.Title}>
                    <Text style={Style.TextTitle}>CHARACTERS</Text>
                </View>
            </View>
            <View style={{height:'75%',justifyContent:'center'}}>
                {Loading?
                (<ActivityIndicator size="large" color="black"/>)
                :
                (                <FlatList
                    data={Data}
                    keyExtractor={(item=>item.char_id)}
                    renderItem={(chItem)=>(
                        <TouchableOpacity style={Style.Character} onPress={()=>props.navigation.navigate('CharacterDetails',{name:chItem.item.name,img:chItem.item.img,nickname:chItem.item.nickname,portrayed:chItem.item.portrayed,appearance:chItem.item.appearance,status:chItem.item.status,statusColor:Color(chItem.item.status)})}>
                            <View style={{width:'28%'}}>
                                <Image source={{uri: chItem.item.img}} resizeMode='stretch'style={Style.ImgCharacters}/>
                            </View>
                            <View style={[Style.Details,{borderLeftColor:Color(chItem.item.status)}]}>
                                <Text style={Style.NameCh}>{chItem.item.name}</Text>
                                <Text style={Style.NicknameCh}>{chItem.item.nickname}</Text>
                            </View>
                        </TouchableOpacity >
                    
                    )}/>)
                }

            </View>
        </View>)

}

export const ScreenOptions = navData=>{
    return{
        Title:'CHARACTERS',
        headerShown:false,
    }
}
export default CharactersScreen;