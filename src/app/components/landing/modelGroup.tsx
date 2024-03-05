"use client";
import Login from '@/src/app/components/landing/Modal/loginModal';
import ForgotPassword from "@/src/app/components/landing/Modal/forgetPasswordModal";
import CreateAccount from "@/src/app/components/landing/Modal/createAccountModal";
import { RootState } from '@/src/app/lib/store';
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import {
  closeModal,
  setLogin,
} from './../../lib/slices/modalSlice';

export default function ModelGroup(props: any) {
    
    const { openLogin, openCreateAccount, login } = useAppSelector(
        (state: RootState) => state.modal
    );

    const dispatch = useAppDispatch();

    const handleModalSwitch = (data: boolean) => {
        dispatch(setLogin(data));
      };

      const handleCloseModal = () => {
        dispatch(closeModal());
      };


    return (
        <>
        { login ?
            <Login open={openLogin} handleModalSwitch={handleModalSwitch} onClose={handleCloseModal} />
            :
            <ForgotPassword open={openLogin} handleModalSwitch={handleModalSwitch} onClose={handleCloseModal} />
            }
            <CreateAccount open={openCreateAccount} onClose={handleCloseModal} />

        </>
    );



}