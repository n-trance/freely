import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';
import { AppStateStatus } from 'react-native';

// app has come from background to foreground
// can be extracted to own file if reused by other components

export const useFromBackground = () => {
  const appState = useRef(AppState.currentState);
  const [fromBackgound, setFromBackground] = useState(false);

  useEffect(() => {
    const sub = AppState.addEventListener('change', handleAppStateChange);
    return () => sub.remove();
  }, []);

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (appState.current.match(/inactive|background/) &&
      nextAppState === 'active') {
      setFromBackground(true);
    }
    appState.current = nextAppState;
  };

  return fromBackgound;
};
