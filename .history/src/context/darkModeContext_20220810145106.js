import DarkMode from '@mui/icons-material/DarkMode';
import { createContext } from 'react';
const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer);
};
