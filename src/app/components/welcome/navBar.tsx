"use client";
import { Box } from '@mui/material';
import {
    setOpenLogin,
  setOpenCreateAccount
} from './../../lib/slices/modalSlice';
import { useAppDispatch } from '../../lib/hooks';


export default function NavBar(props: any) {
    const dispatch = useAppDispatch();

    const handleOpenLoginModal = () => {
        dispatch(setOpenLogin(true));
    };

    const handleOpenCreateAccountModal = () => {
        dispatch(setOpenCreateAccount(true));
    };
  

    return (
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: '1.25rem 1rem'
            }}>
            <Box>
              NGAFID
            </Box>
            <Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px"}} onClick={handleOpenLoginModal}>
              
              Home
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px"}} onClick={handleOpenLoginModal}>
              
              Events
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px"}} onClick={handleOpenLoginModal}>
              
              Analysis
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px"}} onClick={handleOpenLoginModal}>
              
              Flights 
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px",color:"black"}} onClick={handleOpenCreateAccountModal}>
              
              Imports
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px",color:"black"}} onClick={handleOpenCreateAccountModal}>
              
              Uploads
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px",color:"black"}} onClick={handleOpenCreateAccountModal}>
              
              Accounts
              
            </Box>
            </Box>
          </Box>
    );



}