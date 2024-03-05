// store/slices/modalSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  openLogin: boolean;
  openCreateAccount: boolean;
  login: boolean;
}



const initialState: ModalState = {
  openLogin: false,
  openCreateAccount: false,
  login: true,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenLogin: (state, action: PayloadAction<boolean>) => {
      state.openLogin = action.payload;
    },
    setOpenCreateAccount: (state, action: PayloadAction<boolean>) => {
      state.openCreateAccount = action.payload;
    },
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.login = action.payload;
    },
    closeModal: (state) => {
      state.openLogin = false;
      state.openCreateAccount = false;
      state.login = true;
    },
  },
});

export const {
  setOpenLogin,
  setOpenCreateAccount,
  setLogin,
  closeModal,
} = modalSlice.actions;
export default modalSlice.reducer;
