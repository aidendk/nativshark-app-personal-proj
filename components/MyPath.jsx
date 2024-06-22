import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { XStack, YStack, View, Text } from 'tamagui';

import UnitCard from './UnitCard';
import units from '../assets/data/units.json';

import { Container } from '~/tamagui.config';
// how to configure json to best map?
// have one json file thats numbered by units, each unit number gets its own thing

const MyPath = () => {
  return (
    <YStack flex={1} rowGap="$4" mt={12} mx={2}>
      <FlatList
        data={units}
        contentContainerStyle={{ gap: 14 }}
        keyExtractor={(item) => item.unit}
        renderItem={({ item }) => <UnitCard item={item} />}
      />
    </YStack>
  );
};

export default MyPath;
