import ru from './ru.json';
import uz from './uz.json';
import eng from './eng.json';
import store from '../store'
const dictionary = {
    uz,
    ru,
    eng
  };
  function getCurrentlang() {
    return store.getState().user.user.lang || 'eng';
  }
  function t(str) {
    const lang = store.getState().user.user?.lang || 'eng';
    console.log(lang)
    const translation = dictionary[lang][str];
    return translation || '**' + str;
  };
  
  export { t as default, getCurrentlang };