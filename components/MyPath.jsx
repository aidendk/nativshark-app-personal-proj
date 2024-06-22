import React from 'react';
import { XStack, YStack, View, Text } from 'tamagui';

import { Container } from '~/tamagui.config';

const MyPath = () => {
  return (
    <YStack flex={1} rowGap="$4" mt={12} mx={2}>
      <XStack backgroundColor="#3a3a59" borderRadius="$3" p="$3" justifyContent="space-between">
        <XStack>
          <Text>Unit 1</Text>
        </XStack>
        <XStack>
          <Text>Completed</Text>
        </XStack>
      </XStack>
      <XStack backgroundColor="#3a3a59" borderRadius="$3" p="$3" justifyContent="space-between">
        <XStack>
          <Text>Unit 1</Text>
        </XStack>
        <XStack>
          <Text>Completed</Text>
        </XStack>
      </XStack>
    </YStack>
  );
};

export default MyPath;
