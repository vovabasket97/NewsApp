import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { INews } from 'types'

import { styles } from './NewsCard.styles'

interface NewsCardProps extends INews {
  onPress?: () => void
}

dayjs.extend(relativeTime)

const NewsCard: FC<NewsCardProps> = ({ title, description, imageUrl, onPress, postedDate }) => {
  const date = dayjs(postedDate).fromNow()

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.card} onPress={onPress}>
        <Image style={styles.img} source={{ uri: imageUrl }} />
        <View style={styles.content}>
          <Text numberOfLines={3} style={styles.title}>
            {title}
          </Text>
          <Text lineBreakStrategyIOS="push-out" numberOfLines={1} style={styles.description}>
            {description}
          </Text>
          <Text style={styles.postedDate}>{date}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default NewsCard
