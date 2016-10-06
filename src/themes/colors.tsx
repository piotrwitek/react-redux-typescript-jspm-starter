const DARK_THEME = 'darkTheme';
const selectedTheme = null;

export default {
  get textColor() {
    switch (selectedTheme) {
      case DARK_THEME:  return '#111';
      default: return '#fff';
    }
  },
  borderColor: '#222',
  backgroundColor: '#444',
  shadowColor: '#000',
  shadowColorLight: '#888'
};
