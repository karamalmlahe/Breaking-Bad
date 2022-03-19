import React from "react";
import {StyleSheet} from 'react-native'

//LoadingScreen
export const LoadingScreen =StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImgView:{
        width: '100%',
         height: '55%',
         alignItems: 'center',
         justifyContent: 'flex-end'
    },
    Img:{
        width: "40%",
        height:"20%",
        resizeMode:"contain"
    },
    Loading:{
        height: '45%',
        width:'100%',
        justifyContent: 'flex-end',
        paddingBottom: 50
    }
}) 


//Character
export const CharactersScreen =StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ebebeb',
    },
    Character:{
        backgroundColor:'#ffffff',
        marginVertical:10,
        width:'95%',
        alignSelf:'center',
        borderRadius:10,
        flexDirection:'row',
    },
    ImgView:{
        height:'25%',
        justifyContent:'flex-end',
        alignItems: 'center',
        width:'100%',
        
    },
    Img:{
        width: "50%",
        height:"60%",
        resizeMode:"contain",
    },
    Title:{
        width:'100%',
        height:'15%',
        backgroundColor:'#7FDBFF',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
    },
    TextTitle:{
        fontWeight: "700",
        fontSize: 20,
        fontFamily:'DamascusSemiBold'
    },
    ImgCharacters:{
        width:'100%',
        height:105,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    Details:{
        width:'72%',
        justifyContent: 'center',
        paddingHorizontal:15,
        borderLeftWidth:8
    },
    NameCh:{
        fontSize:18,
        fontWeight:'bold',
        color:'#0074D9',
       fontFamily:'Baskerville-Italic'
    },
    NicknameCh:{
        fontWeight:'100',
        fontFamily:'Baskerville'
    }
})

//CharacterDetails
export const CharacterDetailsScreen =StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#ebebeb',
    },
    Text:{
        fontSize:20,
            fontWeight:'700',
        fontFamily:'Chalkboard SE',
        color:'black'
    },
    StatusText:{
        fontSize:22,
        fontWeight:'700',
        fontFamily:'Kohinoor Bangla',
        color:'#ffffff'
    },
    Details:{
        height:'30%',
        backgroundColor:'#ebebeb',
        padding:15
    },
    StatusView:{
        justifyContent: 'center',
        alignItems: 'center',
        height:'7%'
    },
    Img:{
        width:'100%',
        height:'70%',
        justifyContent: 'flex-end'
    },
    Title:{
        fontSize:20,
        fontWeight:'700',
        fontFamily:'Chalkboard SE',
    },
    BackBtn:{
        width:'10%',
        justifyContent:'flex-start',
        paddingLeft:20
    },
    TopView:{
        backgroundColor:'#7FDBFF',
        width:'100%',
        height:'10%',
        alignItems: 'flex-end',
        paddingBottom:10,
        justifyContent: 'center',
        flexDirection:'row'
    }
})

export const EpisodescScreen=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ebebeb',
    },
    ImgView:{
height:'25%',
justifyContent:'flex-end',
alignItems: 'center',
width:'100%',

},
Img:{
width: "50%",
height:"60%",
resizeMode:"contain",
},
Title:{
width:'100%',
height:'15%',
backgroundColor:'#7FDBFF',
alignItems:'center',
justifyContent:'center',
marginTop:10,
},
TextTitle:{
fontWeight: "700",
fontSize: 20,
fontFamily:'DamascusSemiBold'
},
Episodes:{
    paddingLeft:30,
    paddingRight:10,
    backgroundColor:'#ffffff',
    marginVertical:10,
    width:'95%',
    alignSelf:'center',
    borderRadius:10,
},
NameTitle:{
    paddingVertical:15,
    fontSize:18,
    fontWeight:'bold',
    color:'#0074D9',
    fontFamily:'Baskerville-Italic'
},
SeasonEpisode:{
    paddingVertical:15,
    fontWeight:'100',
    fontFamily:'Baskerville',
},
AirDate:{
    paddingVertical:15,
    fontWeight:'100',
    fontFamily:'Baskerville',
}
})

export const EpisodesDetailscScreen=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#ebebeb',
    },
    BackBtn:{
        width:'10%',
        justifyContent:'flex-start',
        paddingLeft:20
    },
    TopView:{
        backgroundColor:'#7FDBFF',
        width:'100%',
        height:'10%',
        alignItems: 'flex-end',
        paddingBottom:10,
        justifyContent: 'center',
        flexDirection:'row'
    },
    Title:{
        fontSize:20,
        fontWeight:'700',
        fontFamily:'Chalkboard SE'
    },
    episodeTitle:{
        width:'100%',
        height:'50%',
        backgroundColor:'#0074D9',
        justifyContent:'center',
        alignItems: 'center'
    },
    episodeTitleText:{
        fontSize:28,
        fontWeight:'500',
       fontFamily:'Optima-BoldItalic'
    },
    ViewCh:{
        width:'100%',
        alignItems: 'center',
        height:'5%',
        backgroundColor:'#7FDBFF',
        justifyContent:'center'
    },
})

export const QuotesScreen=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#ebebeb',
    },
    ImgView:{
        height:'25%',
        justifyContent:'flex-end',
        alignItems: 'center',
        width:'100%',
        
        },
        Img:{
        width: "50%",
        height:"60%",
        resizeMode:"contain",
        },
        Title:{
        width:'100%',
        height:'15%',
        backgroundColor:'#7FDBFF',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        },
        TextTitle:{
        fontWeight: "700",
        fontSize: 20,
        fontFamily:'DamascusSemiBold'
        },
        Quotes:{
            paddingLeft:30,
            paddingRight:5,
            backgroundColor:'#ffffff',
            marginVertical:10,
            width:'95%',
            alignSelf:'center',
            borderRadius:10,
            paddingVertical:10,
        },
        NameQuote:{
            paddingBottom:5,
            fontSize:17,
            fontWeight:'bold',
            color:'#0074D9',
           fontFamily:'Baskerville-Italic'
        },
        NameCh:{
            fontWeight:'100',
            fontFamily:'Baskerville'
        }
})