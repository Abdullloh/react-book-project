import {createContext} from 'react';

export const themes = {
    light: {
        color: 'black',
        background: 'white',
      },
      dark: {
        color: 'white',
        background: 'black',
      },
}
const ModeContext = createContext(themes);
export default ModeContext