/**
 * Created by Necfol on 2017/4/24.
 */
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Index from './index/index';
import Detail from './info/info';

export default StackNavigator({
  Home: {
    screen: Index
  },
  Detail: {
    screen: Detail
  }
});