import React from 'react';
import { Text } from 'react-native';
import { ActivityIndicator} from 'react-native';
/**
 * @name DataLoading
 * @param isLoading: bool
 * @param data: object or array
 * @param component: Component
 * @param emptyComponent: Component
 * @param loadingSize: string
 * @returns {*}
 * @constructor
 */
const DataLoading = (isLoading, data, component, emptyComponent, loadingSize) => {

  if (isLoading) {
    return <ActivityIndicator color={'#969b92'} size={'large'}/>
  }

  if (data instanceof (Array)) {
    if (!data.length) {
      return emptyComponent ? emptyComponent : <Text> data is empty</Text>
    }
    return component
  }

  if (data instanceof (Object)) {
    if (!Object.keys(data).length) {
      return emptyComponent ? emptyComponent : <Text> data is empty</Text>
    }
    return component
  }

};

export default DataLoading;