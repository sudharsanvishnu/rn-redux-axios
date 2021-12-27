import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { useSelector, useDispatch} from 'react-redux'
import {addition, subtraction} from './store/Action'

const Test = (props) => {

    const data = useSelector(state => state)
    const { count } = data;
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Button title="Press to ADD" onPress={() => dispatch(addition())} color="green"/>
            <Text style={styles.text}>{count}</Text>
            <Button title="Press to sub" onPress={() => dispatch(subtraction())} color= "red"/>
        </View>
    )
}

export default Test;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    text: {
        fontSize: 150
    }
})
