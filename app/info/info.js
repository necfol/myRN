/**
 * Created by Necfol on 2017/4/27.
 */
import React, { Component } from 'react';
import {
  Text,
  ScrollView,
} from 'react-native';

export default class Detail extends Component{
  static navigationOptions = {
    title: '详情',
  };
  render(){
    return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
      </ScrollView>
    );
  }
};
