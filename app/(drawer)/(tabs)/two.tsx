import { Stack } from 'expo-router';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <ScreenContent path="app/(drawer)/(tabs)/two.tsx" title="Tab Two" />
    </>
  );
}
