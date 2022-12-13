import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  useWindowDimensions,
} from 'react-native';

const FadeInView = props => {
  const {width} = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(width)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        transform: [{translateX: fadeAnim}],
      }}>
      {props.children}
    </Animated.View>
  );
};

const Task = props => {
  return (
    <FadeInView>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square} />
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular} />
      </View>
    </FadeInView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3f3264',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: '#c7bce1',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
