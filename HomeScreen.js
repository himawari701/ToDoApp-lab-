import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import data from './data.json';


const HomeScreen = () => {
  const renderItem = ({ item }) => {
    const date = new Date(item.createdAt);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    return(
    <View style = {styles.itemContainer}>
    <Text>style = {styles.title}{item.title}</Text>
    <Text>style = {styles.description}{item.description}</Text>
    <Text>By: {item.user} - Comments:{item.commentCount}</Text>
    <Text>{formattedDate} {formattedTime}</Text>
    </View>
    );
  };

    // const items = [];
    // for (let i = 0; i < data.length; i++) {
    //   const item = data[i];
    //   const date = new Date(item.createdAt);
    //   const formattedDate = date.toLocaleDateString();
    //   const formattedTime = date.toLocaleTimeString();
    //   items.push(
    //   <View style = {styles.itemContainer}>
    //   <Text>style = {styles.title}{item.title}</Text>
    //   <Text>style = {styles.description}{item.description}</Text>
    //   <Text>By: {item.user} - Comments:{item.commentCount}</Text>
    //   <Text>{formattedDate} {formattedTime}</Text>
    //   </View>
    //   );
    // }
  return (
    <View key = {item._id} style={styles.container}>
      <Text style={styles.header}>Todo List (For Loop)</Text>
      {/* {data.map((item) => {
       
      })} */}
      <FlatList data = {data} renderItem = {renderItem} keyExtractor = {(item) => item._id} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
});


   export default HomeScreen;
