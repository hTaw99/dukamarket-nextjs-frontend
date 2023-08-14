import { createSlice } from '@reduxjs/toolkit';
// import i18next from 'i18next';
import Cookies from 'js-cookie';

const initialState = {
  currentLng: Cookies.get('ishop_lang') || 'en',
  direction: Cookies.get('ishop_lang') === 'en' ? 'ltr' : 'rtl',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLng: (state, { payload }) => {
      i18next.changeLanguage(payload.lang);
      state.currentLng = payload.lang;
      state.direction = payload.dir;
      document.documentElement.setAttribute('dir', payload.dir);
    },
  },
});

export const { setLng } = globalSlice.actions;
export default globalSlice.reducer;
