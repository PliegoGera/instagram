
import React, { Component } from 'react';
import {createBottomTabNavigator,createAppContainer } from 'react-navigation';
import { Ionicons,FontAwesome  } from '@expo/vector-icons';

import {StackHome} from './StackHome'
import {StackSearch} from './StackSearch'
import Add from './Add'
import Follow from './Follow'
import Profile from './Profile'


const RutasAutenticadas = createBottomTabNavigator(
    {
        Home:{
            screen:StackHome,
            navigationOptions: {
                tabBarLabel:"",
                showIcon: true,
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="home" size={25} style={{ color: tintColor }} />
                ),
                
              },
              
        },
        Search:{
            screen:StackSearch,
            navigationOptions: {
                tabBarLabel:"",
                showIcon: true,
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="search" size={25}  style={{ color: tintColor }} />
                )
              },
        },
        Add:{
            screen:Add,
            navigationOptions: {
                tabBarLabel:"",
                showIcon: true,
                showLabel: false,
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-add" size={25}  style={{ color: tintColor }} />
                )
              },
        },
        Follow:{
            screen:Follow
        },
        Profile:{
            screen:Profile,
        }
    },
    {
        tabBarOptions: {    
            showLabel: false,
            swipeEnabled:true,  
            animationEnabled:true,
            activeTintColor: "#fff",      
            inactiveTintColor: "#000", 
            activeBackgroundColor:"#000"     ,
            style: { 
                   
             height: 50,        
             paddingVertical: 0,        
             backgroundColor: "#fff",
                  
            },      
            labelStyle: {  
                flex:1,      
             fontSize: 14,        
             lineHeight: 20,
             justifyContent:'center',
             alignItems:'center',        
                
            }    
          }   
    }
)
const RutasAuth= createAppContainer(RutasAutenticadas);
    export {RutasAuth};