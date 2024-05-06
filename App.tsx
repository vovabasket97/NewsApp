import Routes from '@components/Routes'
import { configStyles } from '@configs/style'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import NewsProvider from '@providers/NewsProvider'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: configStyles.colors.white,
  },
}

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer theme={navigationTheme}>
        <BottomSheetModalProvider>
          <NewsProvider>
            <Routes />
          </NewsProvider>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
