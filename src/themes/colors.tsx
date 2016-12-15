const DARK_THEME = 'darkTheme';
const selectedTheme = DARK_THEME;

export default {
  get textColor() {
    switch (selectedTheme) {
      case DARK_THEME: return '#111';
      default: return '#fff';
    }
  },
  borderColor: '#222',
  backgroundColor: 'gold',
  shadowColor: '#000',
  shadowColorLight: '#888',
};
