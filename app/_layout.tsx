import { Slot } from 'expo-router';
import { Provider } from 'react-redux';
import { ReduxStore } from '@/redux/store';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <Provider store={ReduxStore}>
      <Slot />
    </Provider>
  );
}
