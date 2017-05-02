/**
 * Created by Necfol on 2017/4/27.
 */
import React, { Component } from 'react';
import {
  Text,
  Button,
  ScrollView,
} from 'react-native';

export default class Detail extends Component{
  constructor(props) {
    super(props)
    console.log(this)
  };
  static navigationOptions = ({navigation}) => {
    const {state, setParams} = navigation;
    const isInfo = state.params.mode === 'info';
    const {info} = state.params;
    return {
      title: navigation.state.params.info,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : `info`}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
        />
      ),
    }
  };
  render(){
    const { params } = this.props.navigation.state;
    return (
      <ScrollView>
        <Text>详情页</Text>
        <Text>尽管信息很少，但这就是详情页</Text>
        <Text>{params.info}</Text>
      </ScrollView>
    );
  }
};
