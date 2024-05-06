import LeftArrowIcon from '@assets/leftArrowIcon.svg'
import Button from '@components/UI/Button/Button'
import { commonNavigationType } from '@configs/routes'
import firestore from '@react-native-firebase/firestore'
import { StackScreenProps } from '@react-navigation/stack'
import { useStore } from '@store/index'
import dayjs from 'dayjs'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Alert, Text, View } from 'react-native'
import { INewsFields } from 'types'

import { styles } from './AddPost.styles'
import AddPostForm from './AddPostForm'

const AddPost = ({ navigation }: StackScreenProps<commonNavigationType, 'AddPost'>) => {
  const { setLoading } = useStore((store) => ({
    setLoading: store.setLoading,
    setPosts: store.setPosts,
  }))
  const { ...methods } = useForm<INewsFields>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<INewsFields> = (data: INewsFields) => {
    setLoading(true)
    firestore()
      .collection('News')
      .add({
        ...data,
        postedDate: dayjs().toString(),
      })
      .then(() => {
        methods.reset()
        navigation.navigate('Home')
      })
      .catch((e) => {
        Alert.alert(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onError: SubmitErrorHandler<INewsFields> = (errors, e) => {
    console.log({ errors })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button style={styles.backBtn} onPress={() => navigation.navigate('Home')} type="rounded">
          <LeftArrowIcon />
        </Button>
        <Text style={styles.pageTitle}>New post</Text>
      </View>
      <View style={styles.content}>
        <AddPostForm methods={methods} />
        <Button style={styles.submitBtn} disabled={!methods.formState.isValid} onPress={methods.handleSubmit(onSubmit, onError)}>
          Public
        </Button>
      </View>
    </View>
  )
}

export default AddPost
