import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
//Characters
import CharactersScreen,{ScreenOptions as CharactersScreenOptions} from "../screens/Characters"
import CharacterDetailsScreen,{ScreenOptions as CharacterDetailsScreenOptions} from "../screens/Characters/CharacterDetails"

//Episodes
import EpisodesScreen,{ScreenOptions as EpisodesScreenOptions} from "../screens/Episodes"
import EpisodesDetailsScreen,{ScreenOptions as EpisodesDetailsScreenOptions} from "../screens/Episodes/EpisodesDetails"

//Quotes
import QuotesScreen,{ScreenOptions as QuotesScreenOptions} from "../screens/quotes"



const CharactersStackNavigator = createStackNavigator();

export const CharactersStack=()=>{
    return(
        <CharactersStackNavigator.Navigator>
            <CharactersStackNavigator.Screen name='Characters' component={CharactersScreen} options={CharactersScreenOptions} />
            <CharactersStackNavigator.Screen name='CharacterDetails' component={CharacterDetailsScreen} options={CharacterDetailsScreenOptions} />
        </CharactersStackNavigator.Navigator>
    )
}



const EpisodesStackNavigator = createStackNavigator();

export const EpisodesStack=()=>{
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='Episodes' component={EpisodesScreen} options={EpisodesScreenOptions} />
            <EpisodesStackNavigator.Screen name='EpisodesDetails' component={EpisodesDetailsScreen} options={EpisodesDetailsScreenOptions} />
        </EpisodesStackNavigator.Navigator>
    )
}



const QuotesStackNavigator = createStackNavigator();

export const QuotesStack=()=>{
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='Quotes' component={QuotesScreen} options={QuotesScreenOptions} />
        </EpisodesStackNavigator.Navigator>
    )
}

const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar=()=>{
    return(
        <AppBottomBarNavigator.Navigator activeColor='blue'  barStyle={{backgroundColor:'#7FDBFF',height:'7%'}}>
            <AppBottomBarNavigator.Screen   name='CharactersStack'  component={CharactersStack} options={{ tabBarLabel:'Characters',tabBarIcon:({})=>(
                <Fontisto name='persons'  size={23}/>
            )}}/>
            <AppBottomBarNavigator.Screen name='EpisodesStack' component={EpisodesStack} options={{tabBarLabel:'Episodes',tabBarIcon:({})=>(
                <Ionicons name='ios-tv' size={23}/>
            )}}/>
            <AppBottomBarNavigator.Screen name='QuotesStack' component={QuotesStack} options={{tabBarLabel:'Quotes',tabBarIcon:({})=>(
                <FontAwesome5 name='quote-right' size={23}/>
            )}}/>
        </AppBottomBarNavigator.Navigator>
    )
}
