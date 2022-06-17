import React from 'react';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { AccessTime } from '@mui/icons-material'
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2'
                    },
                    style: {
                        fontSize: 11,
                    }
                },
                {
                    props: {
                        variant: 'body3'
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

const TourCard = ({ tour }) => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper>
                    <img className='img' src={tour.image} alt="" />
                    <Box paddingX={1}>
                        <Typography component="h2" variant='subtitle1'>
                            {tour.name}
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <AccessTime sx={({ width: 12.5 })} />
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {tour.duration}
                            </Typography>
                        </Box>
                        <Box marginTop={3} sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <Rating size='small' name="read-only" value={tour.rating} readOnly precision={0.5} />
                            <Typography variant='body2' component='p' marginLeft={0.5}>
                                {tour.rating}
                            </Typography>
                            <Typography variant='body3' component='p' marginLeft={1.5}>
                                ({tour.numberOfReviews} reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6' component='h3' marginTop={0}>
                                From C $147
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
};

export default TourCard;