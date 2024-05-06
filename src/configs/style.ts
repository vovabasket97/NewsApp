export const configStyles = {
  container: {
    padding: {
      vertical: 30,
      horizontal: 30,
    },
    getContainerWidth(screenWidth: number) {
      return screenWidth - this.padding.horizontal * 2
    },
  },
  postsGrid: {
    gap: 40,
  },
  fonts: {
    roboto: 'Roboto',
  },
  colors: {
    white: 'white',
    transparent: 'transparent',
    blue: '#456EFE',
    lightBlue: '#456EFE4D',
    red: '#FF6363',
    gray: '#8E949A',
    lightGray: '#A4A9AE26',
    black: '#000000',
    noFound: '#A4A9AE',
  },
}
