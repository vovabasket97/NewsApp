import PlusIcon from '@assets/plusIcon.svg'
import SearchIcon from '@assets/searchIcon.svg'
import Input from '@components/UI/Input/Input'
import { useDebounce } from '@hooks/useDebounce'
import { FC, useLayoutEffect, useState } from 'react'
import { Pressable, TextInputProps as RNTextInputProps, StyleProp, ViewStyle } from 'react-native'

import { styles } from './SearchInput.styles'

interface SearchInputProps extends RNTextInputProps {
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<ViewStyle>
  onDebounce?: (text: string) => void
}

const SearchInput: FC<SearchInputProps> = ({ inputStyle, style, onDebounce, ...props }) => {
  const [value, setValue] = useState('')
  const [debounced] = useDebounce(value, 750)

  useLayoutEffect(() => {
    if (onDebounce) onDebounce(debounced)
  }, [debounced])

  return (
    <Input
      {...props}
      placeholder="Search"
      style={[styles.wrapper, style]}
      inputStyle={inputStyle}
      value={value}
      onChangeText={(text) => setValue(text)}
    >
      <SearchIcon />
      {value !== '' && (
        <Pressable style={styles.reset} hitSlop={4} onPress={() => setValue('')}>
          <PlusIcon />
        </Pressable>
      )}
    </Input>
  )
}

export default SearchInput
