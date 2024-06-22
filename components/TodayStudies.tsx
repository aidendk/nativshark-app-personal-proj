import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { Separator, XStack, View, YStack } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

const TodayStudies = () => {
  const Divider = () => {
    return (
      <View alignSelf="flex-start" borderColor="$gray9" height="$1" pl="$3.5">
        <Separator alignSelf="stretch" borderWidth="$0.75" borderColor="$gray10" vertical />
      </View>
    );
  };
  return (
    <Container flex={1} alignItems="center" rowGap="$2">
      <XStack alignItems="center" columnGap="$4">
        <AntDesign name="checkcircle" color="#66cc91" size={32} />
        <YStack flex={1}>
          <WhiteText fontSize="$2">Reviews completed and Days Studied updated</WhiteText>
        </YStack>
      </XStack>
      <Divider />
      <XStack alignItems="center" columnGap="$4">
        <FontAwesome5 name="dot-circle" color="#9d87b5" size={32} />
        <YStack flex={1}>
          <WhiteText fontWeight="bold" fontSize={9} color="#a6a6bf">
            PHASE TWO
          </WhiteText>
          <WhiteText fontSize="$5" fontWeight="bold">
            Unit 228
          </WhiteText>
        </YStack>
      </XStack>
      <Divider />
      <XStack alignItems="center" columnGap="$4">
        <Entypo name="book" size={32} color="#9d87b5" />
        <YStack flex={1}>
          <WhiteText fontWeight="bold" fontSize={9}>
            GRAMMAR
          </WhiteText>
          <WhiteText fontSize="$4">Sentence-starting conjugations</WhiteText>
        </YStack>
      </XStack>
      <Divider />
      <XStack alignItems="center" columnGap="$4">
        <FontAwesome name="pencil-square" size={36} color="#9d87b5" />
        <YStack flex={1}>
          <WhiteText fontWeight="bold" fontSize={9}>
            KANJI
          </WhiteText>
          <WhiteText fontSize="$4">5 new kanji</WhiteText>
        </YStack>
      </XStack>
      <Divider />
      <XStack alignItems="center" columnGap="$4">
        <MaterialCommunityIcons name="format-letter-case" size={32} color="#9d87b5" />
        <YStack flex={1}>
          <WhiteText fontWeight="bold" fontSize={9}>
            VOCABULARY
          </WhiteText>
          <WhiteText fontSize="$4">8 new words</WhiteText>
        </YStack>
      </XStack>
      <Divider />
      <XStack alignItems="center" columnGap="$4">
        <MaterialCommunityIcons name="dots-horizontal-circle" size={32} color="#9d87b5" />
        <YStack flex={1}>
          <WhiteText fontWeight="bold" fontSize={9}>
            DIALOGUE
          </WhiteText>
          <WhiteText fontSize="$4">A conversation between a couple.</WhiteText>
        </YStack>
      </XStack>
      <Divider />
    </Container>
  );
};

export default TodayStudies;
