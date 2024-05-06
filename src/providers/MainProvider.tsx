import { configStyles } from '@configs/style'
import { StackScreenProps } from '@react-navigation/stack'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native'

interface MainProviderProps {
  WrappedComponent: React.ComponentType<any>
  useScrollView?: boolean
  useContainer?: boolean
}

const withMainProvider = ({ WrappedComponent, useScrollView = true, useContainer = true }: MainProviderProps) => {
  return (props: StackScreenProps<any>) => {
    const isDarkMode = useColorScheme() === 'dark'

    const InnerTag = useScrollView ? ScrollView : View

    return (
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View style={[styles.container, useContainer && styles.horizontalMargins]}>
          <InnerTag
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.scrollWrapper, styles.scrollContainer]}
            style={[styles.scrollWrapper, styles.scrollContainer]}
          >
            <View style={[styles.innerScrollContainer, useContainer && styles.verticalMargins]}>
              <WrappedComponent {...props} />
            </View>
          </InnerTag>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  horizontalMargins: {
    width: '100%',
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
  container: {
    height: '100%',
    flexGrow: 1,
  },
  scrollWrapper: {
    flexGrow: 1,
  },
  scrollContainer: {},
  innerScrollContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },
  verticalMargins: {
    paddingTop: configStyles.container.padding.vertical,
    paddingBottom: configStyles.container.padding.vertical,
  },
})

export default withMainProvider
