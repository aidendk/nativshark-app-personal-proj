import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { YStack } from 'tamagui';

import UnitCard from './UnitCard';
import units from '../assets/data/units.json';

// how to configure json to best map?
// have one json file thats numbered by units, each unit number gets its own thing

const MyPath = () => {
  return (
    <YStack flex={1} mt={12} mx={2}>
      <FlatList
        data={units}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 14 }}
        keyExtractor={(item) => item.unit}
        renderItem={({ item }) => <UnitCard item={item} />}
      />
    </YStack>
  );
};

export default MyPath;
