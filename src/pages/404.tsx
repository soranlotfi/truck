// pages/404.js or pages/404.tsx

import React from 'react';
import { Button, Typography, Container, Grid } from '@mui/material';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item>
                    <div style={{ textAlign: 'center' }}>
                        <Typography variant="h1" component="h1" gutterBottom>
                            404 - Page Not Found
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Oops! The page you are looking for seems to be lost in cyberspace.
                        </Typography>
                        <Link href="/Home" passHref>
                            <Button variant="contained" color="primary">
                                Go to Home
                            </Button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default NotFoundPage;
