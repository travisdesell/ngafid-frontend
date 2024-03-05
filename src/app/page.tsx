
import { Box,  List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import NavBar from "./components/landing/navBar";
import ModelGroup from "./components/landing/modelGroup";
import Content from "./components/landing/content";




function Home() {
 
  
 

  return (
    <Box >
      
      <Box>

        <Box height={56} sx={{ backgroundColor: 'rgba(188,203,218,0.8)' }}>
          
          <NavBar/>

          <Box padding={"1.25rem"} style={{ 'height': '100%' }}>
            <Content />
          </Box>
        </Box>
        
        <ModelGroup/>

      </Box>
    </Box>
  );
}

export default Home;
