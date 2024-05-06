import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  list: {
    width: '100%',
    flex: 1,
  },
  container: {
    paddingHorizontal: configStyles.container.padding.horizontal,
    paddingVertical: configStyles.container.padding.vertical,
    flexGrow: 1,
  },
  notFound: {
    marginTop: 40,
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheetView: {
    flex: 1,
  },
  btns: {
    flexDirection: 'column',
    gap: 16,
    paddingHorizontal: 34,
    paddingVertical: 34,
    paddingTop: 26,
  },
  indicator: {
    backgroundColor: 'rgba(142, 148, 154, 0.4)',
    height: 5,
    width: 35,
  },
})
