'use client'
import { apiStore } from '@/api/apiStore';
import React from 'react'
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import GlobalLoader from '@/components/globalLoader';
import { Box, createTheme, ThemeProvider, } from '@mui/material';
import { defaultThemeSetting, themeComponents } from '@/themes/theme';
import { ColorModeContext, useThemePersistence } from '@/context/theme.context';
import { secondary } from '@/utils/colors'; 

const StoreProvider = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    const { mode, toggleTheme, mounted } = useThemePersistence();

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: toggleTheme,
            mode
        }),
        [mode, toggleTheme],
    );

    const theme = React.useMemo(() => createTheme(defaultThemeSetting(mode)), [mode],);
    const themeOverides = {
        ...theme,
        components: themeComponents(mode).components
    }

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <Provider store={apiStore}>
                <Box sx={{ background: "#fff" }}>
                    {children}
                </Box>
            </Provider>
        );
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