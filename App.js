import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity, ScrollView} from 'react-native';
import TodoItem from './components/TodoItem'

export default function App() {

  const [ textInput, setTextInput ] = useState('')
  const [ todoList, setTodoList ] = useState([
    {
      name: 'Take out the trash',
      done: false,
      key: 1
    },
    {
      name: 'Feed the Baby',
      done: false,
      key: 2,
    },
  ])
  const [key, setKey] = useState(3)

  const handleInput = (e) => {
    setTextInput(e.nativeEvent.text);
  }

  const handleAdd = () => {
    if (textInput !== '') {
      setTodoList([
        ...todoList,
        {
          name: textInput,
          done: false,
          key: key
        },
      ])
    }
    setTextInput('')
    setKey(key+1)
  }

  const handleFinish = (key) => {
    setTodoList(todoList.filter((item) => item.key != key))
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput value={textInput} style={styles.textInput} onChange={handleInput} />
        <Button title='Add' onPress={handleAdd}/>
      </View>
 
      <View style={styles.itemView}>
        <ScrollView>
          {
            todoList.map( (item) => {
              if (item.done === false) {
                return (
                <TodoItem item={item} handleFinish={handleFinish}/>                )
              }
            })
          }
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#777',
    width: 300,
    fontSize: 20,
    padding: 10
  },
  itemView: {
    textAlign: 'left',
    width: '100%',
    height: '80%'
  },
});
