import { FC, ReactNode, memo } from 'react'
import { ControllerRenderProps, FieldValues, UseControllerProps, useController, useFormContext } from 'react-hook-form'
import { NativeSyntheticEvent, Text, View } from 'react-native'

import { styles } from './FormControlledElement.styles'

interface FormControlledElementProps extends UseControllerProps {
  renderItem: (
    field: Omit<ControllerRenderProps<FieldValues, string>, 'onChange'> & {
      onChange?: ((e: NativeSyntheticEvent<any>) => void) | undefined
      onChangeText?: ((text: string) => void) | undefined
    }
  ) => ReactNode
  name: string
  defaultValue?: string
  passAsOnChangeText?: boolean
  componentProps?: Record<string, any>
}

const FormControlledElement: FC<FormControlledElementProps> = ({
  renderItem: RenderItem,
  name,
  defaultValue,
  rules,
  passAsOnChangeText,
  componentProps,
}) => {
  const formContext = useFormContext()
  const { field } = useController({ name, rules, defaultValue })
  const { onChange, ...fieldProps } = field

  if (!formContext || !name) return null

  const { formState } = formContext
  const hasError = Boolean(formState?.errors[name])

  return (
    <View>
      <RenderItem
        onChange={passAsOnChangeText ? undefined : onChange}
        onChangeText={passAsOnChangeText ? onChange : undefined}
        {...fieldProps}
        {...componentProps}
      />

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{(formState.errors[name]?.message as string) || 'Something unexpected happened'}</Text>
        </View>
      )}
    </View>
  )
}

export default memo(FormControlledElement)
