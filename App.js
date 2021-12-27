import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Count from './Count';
import {Provider} from 'react-redux';
import { store } from './store/Store'

const Test = (props) => {
    return (
      <Provider store = {store}>
       <Count />
      </Provider>
    )
}

export default Test;

const styles = StyleSheet.create({})
