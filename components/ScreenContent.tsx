import { AntDesign, Entypo } from '@expo/vector-icons';
import { YStack, H2, Separator, Theme, Header, H1, Button, View, XStack, useTheme } from 'tamagui';

import { EditScreenInfo } from './EditScreenInfo';
import TodayStudies from './TodayStudies';

import { Container, Title, WhiteText } from '~/tamagui.config';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
      <Container pt={"$8"} backgroundColor={"#2c2c44"}>
        <View rowGap="$1">
          <WhiteText>{new Date().toDateString()}</WhiteText>
          <WhiteText fontSize="$9" fontWeight="bold">
            Today's Studies
          </WhiteText>
        </View>
        <View mt={'$3'}>
          <Button size="$3" backgroundColor="$pink10">
            <WhiteText>Study Now</WhiteText>
          </Button>
        </View>
        <Separator borderColor="$gray9" marginVertical={15} />
        <TodayStudies />
      </Container>
  );
};
