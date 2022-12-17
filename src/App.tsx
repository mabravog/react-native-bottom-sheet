import React from 'react'
import { BottomSheetProvider } from './components';
import { AppNavigator } from './navigation';

const App = () => {
  return (
    <BottomSheetProvider>
      <AppNavigator />
    </BottomSheetProvider>
  )
}

export default App
