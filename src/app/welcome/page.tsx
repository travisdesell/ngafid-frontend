'use client';

import { Box, Button, Container, List, ListItem, Modal, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";





export default function Welcome() {

  

  const [openLogin, setOpenLogin] = useState(false);
  const [openCreateAccount, setOpenCreateAccount] = useState(false);
  const [login, setlogin] = useState(true);

  const handleModalSwitch = (data:boolean) => {
    setlogin(data);
  };

  const handleOpenLoginModal = () => {
    setOpenLogin(true);
  };

  const handleOpenCreateAccountModal = () =>{
    setOpenCreateAccount(true);
  }

  const handleCloseModal  = () => {
    setOpenCreateAccount(false);
    setOpenLogin(false);
    setlogin(true);
  };
  
 

  return (
    <Box >
      
      <Box>

        <Box height={56} sx={{ backgroundColor: 'rgba(188,203,218,0.8)' }}>
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
              
              Login 
              
            </Box>
            <Box style= {{cursor:"pointer",display:"inline-block",padding:"0 10px",color:"black"}} onClick={handleOpenCreateAccountModal}>
              
              Create Account
              
            </Box>
            </Box>
          </Box>


          <Box padding={"1.25rem"} style={{ 'height': '100%' }}>
            <Box marginBottom={"0.25rem"} sx={{ backgroundColor: 'white', opacity: "0.8" }}>
              <Box padding={"0.75rem 1.25rem"} fontSize={"1.25rem"} sx={{ backgroundColor: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(0,0,0,.125)' }} >

                Welcome to the National General Aviation Flight Information Database (NGAFID)

              </Box>
              <Box padding={"1.25rem"}>
                <Typography variant="body2" gutterBottom>
                  The NGAFID is part of Aviation Safety Information Analysis and Sharing (ASIAS), a Federal Aviation Administration (FAA) funded, joint government-industry, collaborative information sharing program to proactively analyze broad and extensive data sources towards the advancement of safety initiatives and the discovery of vulnerabilities in the National Airspace System (NAS). The primary objective of ASIAS is to provide a national resource for use in discovering common, systemic safety problems that span multiple operators, fleets, and regions of the airspace. Safety information discovered through ASIAS activities is used across the aviation industry to drive improvements and support a variety of safety initiatives. The NGAFID was originally conceived to bring voluntary Flight Data Monitoring (FDM) capabilities to General Aviation, but has now expanded to include the broader aviation community.
                </Typography>
                <br/>
                <Typography variant="body2" gutterBottom>
                  While sharing flight data is voluntary, there are many reasons pilots and operators should consider participating.
                </Typography>
                <br/>
                <Typography variant="subtitle1" style={{ 'color': '#17a2b8' }} gutterBottom><b>What is digital Flight Data Monitoring?</b></Typography>
                <Typography variant="body2" gutterBottom>
                  FDM is the recording of flight‐related information. Analysis of FDM data can help pilots, instructors, or operator groups improve performance and safety.
                </Typography>

                <Typography variant="subtitle1" style={{ 'color': '#17a2b8' }} ><b>Why should I participate with ASIAS and NGAFID?</b></Typography>
                <List sx={{listStyle: 'disc',padding:'revert',li:{display:'list-item'} }} disablePadding={true}>
                  <ListItem>
                    You can replay your own flights and view your data to identify potential safety risks.
                  </ListItem>

                  <ListItem>
                    Pilots in safety programs are less likely to be involved in an accident (GAO 13‐36, pg. 13).
                  </ListItem>

                  <ListItem>
                    Attitude data you collect will provide you enhanced feedback to improve your skills.
                  </ListItem>

                  <ListItem>
                    Your data will improve safety for the entire aviation community.
                  </ListItem>

                  <ListItem>
                    <strong>
                      <em>
                        Your data cannot be used for any
                        enforcement purposes. The FAA cannot see
                        your data.
                      </em>
                    </strong>
                  </ListItem>
                </List>

                <Typography variant="subtitle1" style={{ 'color': '#17a2b8' }} gutterBottom><b>How will this project benefit the aviation community?</b></Typography>
                <List sx={{listStyle: 'disc',padding:'revert',li:{display:'list-item'} }} disablePadding={true}>
                <ListItem>
                    By working together, the community will identify
                    risks and safety hazards specific to the general
                    aviation and other communities.
                    </ListItem>
                    <ListItem>
                    The communities can develop and implement
                    solutions to recognized problems.
                    </ListItem>
                </List>

                <Typography variant="subtitle1" style={{ 'color': '#17a2b8' }} gutterBottom><b>How can I participate?</b></Typography>
                <Typography variant="body2" gutterBottom>
                  You can participate by uploading data from your on-board avionics (for example, a
                  G1000 or data recorder).
                </Typography>

                <Typography variant="subtitle1" style={{ 'color': '#17a2b8' }} gutterBottom><b>To sign up for an NGAFID account <Link style={{color: '#ffc107!important',textDecoration:'none'}} href='/create_account'>click here</Link></b></Typography>
              </Box>
            </Box>
          </Box>
        </Box>
       
      </Box>
    </Box>
  );
}
