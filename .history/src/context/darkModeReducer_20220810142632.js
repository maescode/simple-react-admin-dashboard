const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case 'DARK':
      return { darkMode: false };

      break;

    default:
      break;
  }
};
