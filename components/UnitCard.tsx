import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, XStack } from 'tamagui';

type UnitCardProps = {
  item: any;
  unit: number;
  phase: number;
  lessonTitle: string;
  unitInfo: UnitInfoProps[];
  lessonCompleted: boolean;
  completedDate: string;
};

type UnitInfoProps = {
  newKanji: number;
  kanjiCompleted: boolean;
  newVocab: number;
  vocabCompleted: boolean;
  newDialogue: string;
  dialogueCompleted: boolean;
};

const UnitCard = ({ item }: UnitCardProps) => {
  return (
    <XStack
      backgroundColor="#3a3a59"
      borderRadius="$3"
      p="$3"
      justifyContent="space-between"
      alignItems="center">
      <XStack alignItems="center" columnGap="$3">
        <Text color={item.unitCompleted ? '#66cc91' : '#a6a6bf'} fontWeight="bold" fontSize="$5">
          Unit {item.unit}
        </Text>
        <Entypo
          name="book"
          size={24}
          color={item.unitInfo.grammarCompleted ? '#66cc91' : '#9d87b5'}
        />
        <MaterialCommunityIcons
          name="dots-horizontal-circle"
          size={24}
          color={item.unitInfo.dialogueCompleted ? '#66cc91' : '#9d87b5'}
        />
      </XStack>
      <XStack>
        <Text color={item.unitCompleted ? '#66cc91' : '#a6a6bf'} fontWeight="bold" fontSize={10}>
          {item.unitCompleted ? 'Completed' : 'Upcoming'}
        </Text>
      </XStack>
    </XStack>
  );
};

export default UnitCard;
