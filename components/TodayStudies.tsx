import { AntDesign, Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Separator, XStack, View, Text, YStack } from 'tamagui';

import { Container, WhiteText } from '~/tamagui.config';

const TodayStudies = () => {
  const Divider = () => {
    return (
      <View alignSelf="flex-start" borderColor="$gray9" height="$1" pl="$3.5">
        <Separator alignSelf="stretch" borderWidth={'$0.75'} borderColor={'$gray10'} vertical />
      </View>
    )
  }
  return (
    <Container flex={1} alignItems="center" rowGap="$2">
      <XStack alignItems="center" columnGap="$4">
        <AntDesign name="checkcircle" color='green' size={32} />
        <YStack flex={1}>
          <WhiteText fontSize={'$2'}>Reviews completed and Days Studied updated</WhiteText>
        </YStack>
      </XStack>
      <Divider/>
      <XStack alignItems="center" columnGap="$4">
        <FontAwesome5 name="dot-circle" color='gray' size={32} />
        <YStack flex={1}>
          <WhiteText>Phase Two</WhiteText>
          <WhiteText fontSize="$7" fontWeight="bold">
            Unit 228 
          </WhiteText>
        </YStack>
      </XStack>
      <Divider/>
      <XStack alignItems="center" columnGap="$4">
        <Entypo name="book" size={32} color={"gray"}/>
        <YStack flex={1}>
          <WhiteText fontWeight={'bold'} fontSize={'$3'}>Grammar</WhiteText>
          <WhiteText fontSize={'$5'}>
            Sentence-starting conjugations 
          </WhiteText>
        </YStack>
      </XStack>
      <Divider/>
      <XStack alignItems="center" columnGap="$4">
        <FontAwesome name="pencil-square" size={36} color={'gray'} />
        <YStack flex={1}>
          <WhiteText fontWeight={'bold'} fontSize={'$3'}>KANJI</WhiteText>
          <WhiteText fontSize={'$5'}>
            5 new kanji
          </WhiteText>
        </YStack>
      </XStack>
      <Divider/>
      <XStack alignItems="center" columnGap="$4">
        <MaterialCommunityIcons name="format-letter-case" size={32} color={'gray'}/>
        <YStack flex={1}>
          <WhiteText fontWeight={'bold'}>Vocabulary</WhiteText>
          <WhiteText fontSize={'$5'}>
            8 new words 
          </WhiteText>
        </YStack>
      </XStack>
      <Divider/>
      <XStack alignItems="center" columnGap="$4">
        <MaterialCommunityIcons name="dots-horizontal-circle" size={32} color={'gray'} />
        <YStack flex={1}>
          <WhiteText fontWeight={'bold'}>Grammar</WhiteText>
          <WhiteText fontSize={'$5'}>
            Sentence-starting conjugations 
          </WhiteText>
        </YStack>
      </XStack>
    </Container>
  );
};

export default TodayStudies;
