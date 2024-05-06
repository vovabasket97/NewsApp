import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 225,
    flexDirection: 'column',
    gap: 30,
  },
  text: {
    fontFamily: configStyles.fonts.roboto,
    fontSize: 16,
    lineHeight: 16,
    color: configStyles.colors.noFound,
    textAlign: 'center',
  },
})
