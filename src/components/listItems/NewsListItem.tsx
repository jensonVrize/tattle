import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Article } from '../../redux/slice/newsSlice';

interface NewsListItemProps {
  item: Article;
}

const NewsListItem: React.FC<NewsListItemProps> = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default NewsListItem;
