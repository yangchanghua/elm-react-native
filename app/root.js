/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import Navigation from './app'
import { View, Platform, Text } from 'react-native'
import RootTabs from './component/TabView'

export default class rootApp extends Component {
  render() {
    return (
      <View style={{backgroundColor: Platform.OS == "ios"?"#000":"#0398ff", flex: 1}}>
        <RootTabs/>
      </View>
    )
  }
}
