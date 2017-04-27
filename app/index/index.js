/**
 * Created by Necfol on 2017/4/24.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import Detail from '../info/info.js';

export default class List extends Component{
  static navigationOptions = {
    title: '首页',
  };
  render(){
    return (
      <ScrollView style={styles.flex}>
        <Text style={styles.list_item} onPress={this.goTo.bind(this, '豪华邮轮济州岛3日游')}>☆ 豪华邮轮济州岛3日游</Text>
        <Text style={styles.list_item} onPress={this.goTo.bind(this, '豪华邮轮台湾3日游')}>☆ 豪华邮轮台湾3日游</Text>
        <Text style={styles.list_item} onPress={this.goTo.bind(this, '豪华邮轮地中海8日游')}>☆ 豪华邮轮地中海8日游</Text>
      </ScrollView>
    );
  }
  goTo(info){
    const { navigate } = this.props.navigation;
    navigate('Detail', {
      info
    })
  }
};

var styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  list_item:{
    lineHeight:25,
    fontSize:16,
    marginLeft:10,
    marginRight:10
  }
});