/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Animated,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../util'
let {width, height} = Dimensions.get('window')
import HomePage from '../pages/Home'
import Discover from '../pages/Discover'
import Order from '../pages/Order'
import My from '../pages/My'

import { TabNavigator } from "react-navigation";

import { Button, Text, Footer, FooterTab } from "native-base";

const tabNames = [
    ["外卖", "logo-google", "HomePage", ],
    ["发现", "ios-compass-outline", "Discover", ],
    ["订单", "ios-list-box-outline", "Order", ],
    ["我的", "ios-contact-outline", "My", ]
]

const RootTabs = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: 'HomeScreen',
        },
    },
    Discover: {
        screen: Discover
    },
    Order: {
        screen: Order
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: 'ProfileScreen',
        }
    },
}, {
    tabBarComponent: props => {
        return (
            <Footer>
                <FooterTab>
                    {
                        tabNames.map((e, i) => {
                            return
                            (<Button
                                vertical
                                active={props.navigationState.index === i}
                                onPress={() => props.navigation.navigate(e[2])}>
                                <Icon name={e[1]}  size={px2dp(22)} color="#666" />
                                <Text>{e[0]}</Text>
                            </Button>)
                        })
                    }
                </FooterTab>
            </Footer>
        );
    }
});

export default RootTabs;


const styles = StyleSheet.create({
    tabbar: {
      height: px2dp(46),
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    hide: {
      transform: [
        {translateX:width}
      ]
    },
    tabStyle:{
      padding: px2dp(4)
    }
})
