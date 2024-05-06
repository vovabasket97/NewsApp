import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 50,
    justifyContent: 'space-between',
    flexGrow: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    minHeight: 48,
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    width: 48,
  },
  pageTitle: {
    paddingHorizontal: 48,
    fontFamily: configStyles.fonts.roboto,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 23,
    color: '#23303B',
  },
  content: {
    flexDirection: 'column',
    gap: 50,
    flexGrow: 1,
  },
  form: {
    flexDirection: 'column',
    gap: 25,
    flexGrow: 1,
  },
  textArea: {
    minHeight: 154,
    verticalAlign: 'top',
  },
  submitBtn: {},
})
