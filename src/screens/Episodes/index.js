import React,{useState,useEffect} from "react";
import {Text,View,Image,ActivityIndicator, FlatList,TouchableOpacity}from "react-native";
import{EpisodescScreen as Style}from '../../utility/appStyle';
const EpisodescScreen = (props)=>{
    const[Data,setData]=useState([]);
    const[Loading,setLoading]=useState();
    useEffect( async () => {
        setLoading(true);
        const response=  await fetch('https://breakingbadapi.com/api/episodes',{
            method: 'GET'})
        .then(res=>res.json())
        .then(data=>setData(data))
        setLoading(false);
  },[]);
    return (
        <View style={Style.container}>
        <View style={Style.ImgView}>
            <Image style={Style.Img} source={require('../../img/Breaking_Bad_logo.svg.png')}/>
            <View style={Style.Title}>
                <Text style={Style.TextTitle}>EPISODES</Text>
            </View>
        </View>
        <View style={{height:'75%',justifyContent: 'center'}}>
        {Loading?
        (<ActivityIndicator size="large" color="black"/>):(<FlatList
            data={Data}
            keyExtractor={(item=>item.episode_id)}
            renderItem={(chItem)=>(
                <TouchableOpacity onPress={()=>props.navigation.navigate('EpisodesDetails',{season:chItem.item.season,episode:chItem.item.episode,title:chItem.item.title,characters:chItem.item.characters})}>
                <View  style={Style.Episodes} >
                    <Text style={Style.NameTitle}>{chItem.item.title}</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={Style.SeasonEpisode}>Season {chItem.item.season} | Episode {chItem.item.episode}</Text>
                        <Text style={Style.AirDate}>Air Date: {chItem.item.air_date} </Text>
                    </View>
                </View>
                </TouchableOpacity>
            )}/>)}
        </View>
    </View>
    )
}
export const ScreenOptions = navData=>{
    return{
        headerShown:false,
    }
}
export default EpisodescScreen;