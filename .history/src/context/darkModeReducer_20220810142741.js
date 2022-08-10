const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT': {
      return { darkMode: false };
    }

    case 'DARK': {
      return { darkMode: false };
    }

    case 'TOGGLE':
      {
        return { darkMode: false };
      }

      break;

    default:
      break;
  }
};
