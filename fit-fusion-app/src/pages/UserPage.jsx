import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import NavBar from '@/components/NavBar';

const UserPage = () => {
    return (
        <>
        <NavBar />
        <Container component="main" maxwidth="xs">
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                align="center">

                <Avatar alt="Fit Fusion Logo" src="/images/app_logo.png" sx={{ width: 56, height: 56 }}/>
                <Typography component="h1" variant="h2">User Info</Typography>

                <Box component="form" sx={{ mt: 4 }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sm={8}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="Name"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <TextField
                                    required
                                    fullWidth
                                    id="height"
                                    label="Height"
                                    name="height"
                                    autoComplete="Height"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <TextField
                                    required
                                    fullWidth
                                    id="weight"
                                    label="Weight"
                                    name="weight"
                                    autoComplete="Weight"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginY: 2,
                                }}
                            >
                                <RadioGroup
                                    row
                                    aria-labelledby="row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                fullWidth 
                                variant="contained"
                            >
                                Confirm
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        </>
    )
}

export default UserPage;
