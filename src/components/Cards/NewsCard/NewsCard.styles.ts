import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 40,
  },
  card: {
    flexDirection: 'column',
    shadowColor: '#6e7588',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: configStyles.colors.white,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'column',
    padding: 18,
  },
  img: {
    width: '100%',
    maxHeight: 195,
    aspectRatio: '16/9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: configStyles.fonts.roboto,
    fontWeight: '600',
    fontSize: 20,
    color: configStyles.colors.black,
    marginBottom: 10,
  },
  description: {
    fontFamily: configStyles.fonts.roboto,
    fontWeight: '300',
    fontSize: 16,
    color: configStyles.colors.black,
    marginBottom: 5,
  },
  postedDate: {
    fontFamily: configStyles.fonts.roboto,
    fontWeight: '200',
    fontSize: 12,
    color: configStyles.colors.gray,
  },
})
