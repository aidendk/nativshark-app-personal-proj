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
    <Container pt="$8" backgroundColor="#2c2c44" px={'$3'}>
      <View rowGap="$1">
        <WhiteText color={'$gray11'} fontWeight={'bold'}>{new Date().toDateString()}</WhiteText>
        <WhiteText fontSize="$9" fontWeight="bold">
          Today's Studies
        </WhiteText>
      </View>
      <View mt="$3">
        <Button size="$3" backgroundColor="#f63c7e">
          <WhiteText fontWeight={'bold'} fontSize={'$2'}>Study Now</WhiteText>
        </Button>
      </View>
      <Separator borderColor="gray" borderRadius={"$1"} marginVertical={15} />
      <TodayStudies />
    </Container>
  );
};
