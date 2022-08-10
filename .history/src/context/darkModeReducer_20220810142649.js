const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT':
      return { darkMode: false };

      break;

    default:
      break;
  }
};
