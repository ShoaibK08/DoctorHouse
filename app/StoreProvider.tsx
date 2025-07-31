'use client'
import { apiStore } from '@/api/apiStore';
import React from 'react'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import GlobalLoader from '@/components/globalLoader';
import { Box, createTheme, ThemeProvider, } from '@mui/material';
import { defaultThemeSetting, themeComponents } from '@/themes/theme';
import { ColorModeContext } from '@/context/theme.context';
import { secondary } from '@/utils/colors'; 

const StoreProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            }
        }),
        [],
    );
    const theme = React.useMemo(() => createTheme(defaultThemeSetting(mode)), [mode],);
    const themeOverides = {
        ...theme,
        components: themeComponents(mode).components
    }

    return (
        <>
            <Provider store={apiStore}>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={themeOverides}>
                        <GlobalLoader />
                        <Toaster />
                        <Box sx={{ background: mode === "light" ? "#fff" : secondary, }}>
                            {children}
                        </Box>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </Provider>
        </>
    )
}

export default StoreProvider