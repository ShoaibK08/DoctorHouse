'use client'
import { secondary } from '@/utils/colors';
import { Box, Container, useTheme, IconButton, Avatar, Typography, CardActionArea, Switch } from '@mui/material'
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import languageStore from '@/zustand/languageStore';
import { useRouter } from 'next/navigation';
import { whiteIconButtonStyle } from '@/themes/styles';
import { ColorModeContext } from '@/context/theme.context';
import { ToggleBtn } from '@/components/ThemeToggleBtn';
import LogoutPopup from './components/LogoutPopup';

const ProfilePage = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const colorMode = React.useContext(ColorModeContext);
    // 
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const router = useRouter()
    
    // State for logout popup
    const [logoutPopupOpen, setLogoutPopupOpen] = React.useState(false);
    return (
        <>
            <Box sx={{ minHeight: '100vh' }}>
                <Box sx={topContainerStyle(mode)}>
                    <Container fixed>
                        <IconButton onClick={() => router.push("/dashboard")} >
                            <KeyboardArrowLeftIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Container>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" mt='-70px' flexDirection="column">
                    <Box display="flex" alignItems="flex-end">
                        <Avatar src='/assets/avatar.png' alt='user' style={{ width: '130px', height: '130px', border: "2px solid #fff" }} />
                        <IconButton sx={{ ml: '-40px', zIndex: '10' }}>
                            <img src="/icons/edit-new.svg" alt="" />
                        </IconButton>
                    </Box>
                    <Typography variant="body1" color="text.primary" fontWeight={700} mt='10px' >
                        John Doe
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        abc@gmail.com
                    </Typography>
                </Box>
                <br />
                <Container fixed>
                    <ListItem
                        icon={<PersonIcon fontSize="small" />}
                        title={Labels?.lbl_profile}
                        url="/dashboard/profile/edit"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<CreditCardIcon fontSize="small" />}
                        title={Labels?.lbl_payment}
                        url="/dashboard/payment"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<LockIcon fontSize="small" />}
                        title={Labels?.lbl_privacy}
                        url="/dashboard/reports/privacy-policy"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<GavelIcon fontSize="small" />}
                        title={Labels?.lbl_eula}
                        url="/dashboard/reports/eula"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<BadgeIcon fontSize="small" />}
                        title={Labels?.lbl_profilo}
                        url="/dashboard/reports/profiling"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<CampaignIcon fontSize="small" />}
                        title={Labels?.lbl_legal}
                        url="/dashboard/reports/news-offers"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<CallIcon fontSize="small" />}
                        title={Labels?.lbl_contacts}
                        url="/dashboard/reports/contacts"
                        isLogout={false}
                        isSwitch={false}
                    />
                    <ListItem
                        icon={<DarkModeIcon fontSize="small" />}
                        title={"Change to dark theme"}
                        // title={Labels?.lbl_settings}
                        url="/dashboard/profile/settings"
                        isLogout={false}
                        isSwitch={true}
                        switchComp={<ToggleBtn />}
                    />
                    <ListItem
                        icon={<SecurityIcon fontSize="small" />}
                        title={Labels?.lbl_biometric || 'Biometric & screen lock'}
                        url="/dashboard/profile/biometric"
                        isLogout={false}
                        isSwitch={true}
                        switchComp={<Switch defaultChecked />}
                    />
                    <ListItem
                        icon={<HelpIcon fontSize="small" />}
                        title={Labels?.lbl_help}
                        url="/dashboard/reports/help"
                        isLogout={false}
                        isSwitch={false}
                    />
                    {/* <ListItem
                        icon={<LogoutIcon fontSize="small" />}
                        title={Labels?.lbl_logout}
                        url="/dashboard/logout"
                        isLogout={true}
                    /> */}
                    <Box sx={{ borderTop: mode === 'light' ? "1px solid #E5E7EB" : "1px solid #3B3B3B" }}>
                        <Box 
                            onClick={() => setLogoutPopupOpen(true)}
                            sx={{ 
                                cursor: 'pointer',
                                py: '15px'
                            }}
                        >
                            <Typography variant="body1" color="text.secondary">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            
            {/* Logout Popup */}
            <LogoutPopup 
                open={logoutPopupOpen}
                onClose={() => setLogoutPopupOpen(false)}
            />
        </>
    )
}

export default ProfilePage
import {
    Person as PersonIcon,
    CreditCard as CreditCardIcon,
    Lock as LockIcon,
    Gavel as GavelIcon,
    Badge as BadgeIcon,
    Campaign as CampaignIcon,
    Call as CallIcon,
    DarkMode as DarkModeIcon,
    Security as SecurityIcon,
    Help as HelpIcon,
} from '@mui/icons-material';
import Link from 'next/link';

const ListItem = ({ title, url, isLogout, icon, isSwitch, switchComp }: { title: string; url: string, isLogout: boolean, icon: any, isSwitch: boolean, switchComp?: any }) => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    return (
        <CardActionArea
            onClick={() => !isSwitch && router.push(url)}
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "10px",
                alignItems: "center",
                py: "10px",
                mb: '8px',
                borderRadius: "10px",
            }}>
            <Box 
                sx={{ 
                    color: "#fff", 
                    background: "linear-gradient(to right, #35558a, #3487c7)",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {icon}
            </Box>
            <Typography variant="body1" color="text.primary" fontWeight={500}>
                {title}
            </Typography>
            <Box flexGrow={1} />
            {isSwitch ? switchComp :
                <Box sx={{ visibility: isLogout ? "hidden" : "unset" }}>
                    <ChevronRightOutlinedIcon color='primary' />
                </Box>
            }
        </CardActionArea>
    );
};


const topContainerStyle = (mode: string) => {
    return {
        background: mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : secondary,
        pt: '20px',
        pb: '40px'
    }
}
