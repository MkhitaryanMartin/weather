import { Box, CircularProgress } from '@mui/material';
import React from 'react';


const Loader = () => {
    return (
        <Box
            height="93vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress />
        </Box>
    );
};

export default Loader;