import NotFoundIcon from '@assets/notFoundIcon.svg'
import { FC } from 'react'
import { Text, View } from 'react-native'

import { styles } from './NotFoundResults.styles'

interface NotFoundResultsProps {}

const NotFoundResults: FC<NotFoundResultsProps> = () => {
  return (
    <View style={styles.wrapper}>
      <NotFoundIcon />
      <Text style={styles.text}>No results found</Text>
    </View>
  )
}

export default NotFoundResults
