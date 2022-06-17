import React from 'react';
import { Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import cities from '../data.json'

const Home = () => {
    return (
        <Container sx={{ marginY: 5 }}>
            {
                cities.map(city => (
                    <>
                        <Typography variant='h4'
                            component='h2'
                            marginTop={5}
                            marginButton={5}
                        >To {city.name}</Typography>
                        <Grid container spacing={3}>
                            {city.tours.map((tour, index) => (
                                <TourCard key={index} tour={tour}></TourCard>
                            ))}
                        </Grid>
                    </>
                ))
            }

        </Container>
    );
};

export default Home;