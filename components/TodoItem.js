import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem ({item, handleFinish}) {
    console.log(item)
    return (
        <TouchableOpacity onPress={() => handleFinish(item.key)}>
            <Text key={item.key} style={styles.item}> {item.name}  </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 10,
        padding: 5,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#777'
      }
})