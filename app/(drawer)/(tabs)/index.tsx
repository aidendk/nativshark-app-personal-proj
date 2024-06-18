import { Stack } from 'expo-router';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
    </>
  );
}
