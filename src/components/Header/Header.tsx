import PlusIcon from '@assets/plusIcon.svg'
import Button from '@components/UI/Button/Button'
import SearchInput from '@components/UI/SearchInput/SearchInput'
import { useStore } from '@store/index'
import { FC } from 'react'
import { View } from 'react-native'

import { styles } from './Header.styles'

interface HeaderProps {
  onPlusClick: () => void
}

const Header: FC<HeaderProps> = ({ onPlusClick }) => {
  const { value, setValue } = useStore((store) => ({ value: store.search, setValue: store.setSearch }))

  return (
    <View style={styles.header}>
      <SearchInput value={value} style={styles.input} onDebounce={(text) => setValue(text)} />
      <Button type="rounded" onPress={onPlusClick} style={styles.addBtn}>
        <PlusIcon />
      </Button>
    </View>
  )
}

export default Header
