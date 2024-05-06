export interface INewsFields {
  title: string
  imageUrl: string
  list: string
  description: string
}

export interface INews extends INewsFields {
  uid: string
  postedDate: string
}
