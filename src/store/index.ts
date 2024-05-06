import { INews } from 'types'
import { StateCreator, create } from 'zustand'

export interface IStore {
  posts: INews[]
  setPosts: (posts: INews[]) => void

  isLoading: boolean
  setLoading: (state: boolean) => void

  search: string
  setSearch: (text: string) => void
}

const initialState: StateCreator<IStore> = (set, get) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),

  isLoading: false,
  setLoading: (state) => set({ isLoading: state }),

  search: '',
  setSearch: (text) => set({ search: text }),
})

export const useStore = create<IStore>(initialState)
