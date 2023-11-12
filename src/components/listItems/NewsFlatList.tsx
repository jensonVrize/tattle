import React from 'react';
import { FlatList } from 'react-native';
import NewsListItem from './NewsListItem';
import { Article } from '../../redux/slice/newsSlice';
import { uniqueId } from 'lodash';

interface NewsFlatListProps {
  data: Article[];
}

const NewsFlatList: React.FC<NewsFlatListProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NewsListItem item={item} />}
      keyExtractor={() => `item-${uniqueId()}`}
    />
  );
};

export default NewsFlatList;
