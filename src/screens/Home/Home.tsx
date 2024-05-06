import Backdrop from '@components/Backdrop'
import NewsCard from '@components/Cards/NewsCard/NewsCard'
import Header from '@components/Header/Header'
import NotFoundResults from '@components/NotFoundResults/NotFoundResults'
import Button from '@components/UI/Button/Button'
import { commonNavigationType } from '@configs/routes'
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet'
import firestore from '@react-native-firebase/firestore'
import { StackScreenProps } from '@react-navigation/stack'
import { useStore } from '@store/index'
import { useCallback, useRef, useState } from 'react'
import { Alert, FlatList, RefreshControl, View } from 'react-native'
import { INews } from 'types'

import { styles } from './Home.styles'

const snapPoints = [226]

const Home = ({ navigation }: StackScreenProps<commonNavigationType, 'Home'>) => {
  const clickedPost = useRef<null | string>(null)
  const { news, setPosts, setLoading, isLoading } = useStore((store) => ({
    news: store.posts,
    setPosts: store.setPosts,
    setLoading: store.setLoading,
    isLoading: store.isLoading,
  }))
  const [refreshing, setRefreshing] = useState(false)

  const bottomSheetModalRef = useRef<BottomSheetModal>(null)

  const onPressCardHandler = useCallback((id: string) => {
    bottomSheetModalRef.current?.present()
    clickedPost.current = id
  }, [])
  const onPressCloseHandler = useCallback(() => {
    bottomSheetModalRef.current?.close()
  }, [])

  const onRefresh = useCallback(async () => {
    setRefreshing(true)

    let documentSnapshot = await firestore().collection('News').orderBy('postedDate', 'desc').get()

    const tasksList: INews[] = []

    documentSnapshot.forEach((docSnapshot) => {
      const data = (docSnapshot.data() || null) as INews | null

      if (data && data !== null) tasksList.push({ ...data, uid: docSnapshot.id })
    })

    setPosts(tasksList)
    setRefreshing(false)
  }, [])

  const onDeleteHandler = useCallback(() => {
    const id = clickedPost.current as string

    setLoading(true)
    firestore()
      .collection('News')
      .doc(id)
      .delete()
      .then(() => {
        onPressCloseHandler()
      })
      .catch((e) => {
        Alert.alert(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <>
      <BottomSheetModal
        backdropComponent={(props) => <Backdrop {...props} onPress={onPressCloseHandler} />}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.indicator}
      >
        <BottomSheetView style={styles.bottomSheetView}>
          <View style={styles.btns}>
            <Button loading={isLoading} onPress={onDeleteHandler} type="secondary">
              Delete
            </Button>
            <Button onPress={onPressCloseHandler}>Close</Button>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header onPlusClick={() => navigation.navigate('AddPost')} />}
        data={news}
        renderItem={({ item }) => <NewsCard onPress={onPressCardHandler.bind(null, item.uid)} {...item} />}
        contentContainerStyle={styles.container}
        style={styles.list}
        ListEmptyComponent={
          <View style={styles.notFound}>
            <NotFoundResults />
          </View>
        }
      />
    </>
  )
}

export default Home
