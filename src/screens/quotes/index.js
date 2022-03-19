import React,{useState,useEffect} from "react";
import {Text,View,Image,FlatList,ActivityIndicator}from "react-native";
import{QuotesScreen as Style}from '../../utility/appStyle';
const QuotesScreen = (props)=>{
    const[Data,setData]=useState([]);
    const[Loading,setLoading]=useState();
    useEffect( async () => {
        setLoading(true)
        const response=  await fetch('https://breakingbadapi.com/api/quotes',{
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
                <Text style={Style.TextTitle}>QUOTES</Text>
            </View>
        </View>
        <View style={{height:'75%',justifyContent:'center'}}>
        {Loading?
        (<ActivityIndicator size="large" color="black"/>):(            <FlatList
            data={Data}
            keyExtractor={(item=>item.quote_id)}
            renderItem={(chItem)=>(
                <View  style={Style.Quotes} >
                    <Text style={Style.NameQuote}>{chItem.item.quote}</Text>
                    <Text style={Style.NameCh}> {chItem.item.author}</Text>
                </View>
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
export default QuotesScreen;