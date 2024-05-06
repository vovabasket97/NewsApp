import { configStyles } from '@configs/style'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    minHeight: 48,
    paddingVertical: Platform.OS === 'ios' ? 12 : null,
    paddingHorizontal: 14,
    backgroundColor: configStyles.colors.lightGray,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  input: {
    fontFamily: configStyles.fonts.roboto,
    fontSize: 16,
    color: configStyles.colors.black,
    width: '100%',
    flex: 1,
  },
})

export const placeHolderColor = configStyles.colors.gray
