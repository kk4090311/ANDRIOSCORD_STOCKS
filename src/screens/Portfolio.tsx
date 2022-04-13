import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (<Text>I have rendered {count} times!</Text>);
}



const Portfolio = () => {
  return (
    <View style={styles.screen}>
      <Text>Portfolio</Text>
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Portfolio;
