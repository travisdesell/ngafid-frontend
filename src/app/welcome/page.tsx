'use client';

import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, List, ListItem, Modal, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import NavBar from "../components/welcome/navBar";
import CardItem from "../components/welcome/cardItem";





export default function Welcome() {



  const [openLogin, setOpenLogin] = useState(false);
  const [openCreateAccount, setOpenCreateAccount] = useState(false);
  const [login, setlogin] = useState(true);

  const handleModalSwitch = (data: boolean) => {
    setlogin(data);
  };

  const handleOpenLoginModal = () => {
    setOpenLogin(true);
  };

  const handleOpenCreateAccountModal = () => {
    setOpenCreateAccount(true);
  }

  const handleCloseModal = () => {
    setOpenCreateAccount(false);
    setOpenLogin(false);
    setlogin(true);
  };



  return (
    <Box >

      <Box>

        <Box height={56} sx={{ backgroundColor: 'rgba(188,203,218,0.8)' }}>
          <NavBar />
          <Box padding={"1.25rem"} style={{ 'height': '100%' }}>
            <Grid container>
              <Grid item lg={6}>
                <Card sx={{ "margin": "0.5rem" }}>
                  <CardHeader title={"Hello World"} sx={{ "padding": "0.75rem 1.25rem", "marginBottom": "0", "backgroundColor": "rgba(0,0,0,.03)", "borderBottom": "1px solid rgba(0,0,0,.125)", "fontSize": "1.5rem" }} />
                  <CardContent sx={{ "padding": "1.25rem" }}>
                    <Grid container>
                      <Grid item sm={4}>
                        <CardItem title={"869.87"} subTitle={"Flights Hours"} />
                      </Grid>
                      <Grid item sm={4}>
                        <CardItem title={"585"} subTitle={"Flights"} />
                      </Grid>
                      <Grid item sm={4}>
                        <CardItem title={"39"} subTitle={"Aircraft"} />
                      </Grid>
                    </Grid>
                    <Divider sx={{ "marginTop": "1rem", "marginBottom": "1rem", "border": "0", "borderTop": "1px solid rgba(0,0,0,.1)" }} />
                    <Grid container>
                      <Grid item sm={4}>
                        <CardItem title={"0"} subTitle={"Total Events"} />
                      </Grid>
                      <Grid item sm={4}>
                        <CardItem title={"0"} subTitle={"Events This Year"} />
                      </Grid>
                      <Grid item sm={4}>
                        <CardItem title={"0"} subTitle={"Events This Month"} />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={6}>
                <Card sx={{ "margin": "0.5rem" }}>
                  <CardHeader title={"Notifications"} sx={{ "padding": "0.75rem 1.25rem", "marginBottom": "0", "backgroundColor": "rgba(0,0,0,.03)", "borderBottom": "1px solid rgba(0,0,0,.125)", "fontSize": "1.5rem" }} />
                  <CardContent sx={{ "padding": "1.25rem" }}>
                    <Grid container>

                      <Grid item sm={4}>
                        <Typography component={"h3"}>
                          869.87
                        </Typography>
                        Flights Hours
                      </Grid>
                      <Grid item sm={4}>
                        <Typography component={"h3"}>
                          585
                        </Typography>
                        Flights
                      </Grid>
                      <Grid item sm={4}>
                        <Typography component={"h3"}>
                          39
                        </Typography>
                        Aircraft
                      </Grid>

                      <Divider />
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Box>
    </Box>
  );
}
