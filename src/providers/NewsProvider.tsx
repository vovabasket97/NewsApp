import firestore from '@react-native-firebase/firestore'
import { useStore } from '@store/index'
import { FC, PropsWithChildren, useEffect } from 'react'
import { Alert } from 'react-native'
import { INews } from 'types'

interface NewsProviderProps extends PropsWithChildren {}

const NewsProvider: FC<NewsProviderProps> = ({ children }) => {
  const { setLoading, setPosts } = useStore((store) => ({
    setLoading: store.setLoading,
    setPosts: store.setPosts,
  }))

  useEffect(() => {
    setLoading(true)

    let ref = firestore().collection('News').orderBy('postedDate', 'desc')

    const subscriber = ref.onSnapshot(
      (documentSnapshot) => {
        const tasksList: INews[] = []

        documentSnapshot.forEach((docSnapshot) => {
          const data = (docSnapshot.data() || null) as INews | null

          if (data && data !== null) tasksList.push({ ...data, uid: docSnapshot.id })
        })

        setPosts(tasksList)
        setLoading(false)
      },
      (error) => {
        Alert.alert(error.message)
        setLoading(false)
        setPosts([])
      }
    )

    return () => subscriber()
  }, [])

  return children
}

export default NewsProvider
