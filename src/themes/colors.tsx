const DARK_THEME = 'darkTheme';
const selectedTheme = null;

export default {
  get textColor() {
    switch (selectedTheme) {
      case DARK_THEME:  return '#111';
      default: return '#fff';
    }
  },
  borderColor: '#111111',
  backgroundColor: '#474747',
  backgroundColorLight: '#a7a7a7',
  shadowColor: '#000',
  shadowColorLight: '#888'
};
