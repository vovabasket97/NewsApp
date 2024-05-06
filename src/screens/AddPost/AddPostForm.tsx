import FormControlledElement from '@components/UI/FormControlledElement/FormControlledElement'
import Input from '@components/UI/Input/Input'
import { isLink } from '@utils/isLInk'
import { FormProvider } from 'react-hook-form'
import { View } from 'react-native'

import { styles } from './AddPost.styles'

const AddPostForm = ({ methods }: { methods: any }) => {
  return (
    <FormProvider {...methods}>
      <View style={styles.form}>
        <FormControlledElement
          componentProps={{
            placeholder: 'Title*',
          }}
          passAsOnChangeText
          name="title"
          rules={{ required: 'Title is required!' }}
          renderItem={Input}
        />
        <FormControlledElement
          componentProps={{
            placeholder: 'Image url',
          }}
          passAsOnChangeText
          name="imageUrl"
          renderItem={Input}
        />
        <FormControlledElement
          componentProps={{
            placeholder: 'Link',
          }}
          rules={{
            validate: (value, fields) => {
              if (!isLink(value)) {
                return 'This field should contains link'
              }
            },
          }}
          passAsOnChangeText
          name="list"
          renderItem={Input}
        />
        <FormControlledElement
          componentProps={{
            placeholder: 'Type  your message here..*',
            inputStyle: styles.textArea,
            multiline: true,
            numberOfLines: 10,
          }}
          passAsOnChangeText
          name="description"
          rules={{ required: 'Description is required!' }}
          renderItem={Input}
        />
      </View>
    </FormProvider>
  )
}

export default AddPostForm
