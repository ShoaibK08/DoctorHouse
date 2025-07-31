'use client'
import languageStore from '@/zustand/languageStore'
import { Autocomplete, Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const ProfileEditForm = () => {
    const { getLabels, language, json } = languageStore()
    // const { IsdCountries, specialities }: any = json
    const signUpLabels = getLabels('SignUp') as any
    const commonLabels = getLabels('Common') as any
    return (
        <>
            <Box sx={gridStyle}>
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {signUpLabels?.lbl_first_name}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                    />
                </Box>
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {signUpLabels?.lbl_last_name}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                    />
                </Box>
            </Box>
            <br />
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {signUpLabels?.lbl_dob}
                </Typography>
                <TextField
                    id=""
                    label=""
                    type='date'
                    fullWidth
                />
            </Box>
            <br />
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {signUpLabels?.lbl_address}
                </Typography>
                <TextField
                    id=""
                    label=""
                    fullWidth
                />
            </Box>
            <br />
            <Box sx={gridStyle}>
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {signUpLabels?.lbl_city}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                    />
                </Box>
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {signUpLabels?.lbl_state}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                    />
                </Box>
            </Box>
            <br />
            <Box sx={gridStyle}>
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {signUpLabels?.lbl_country}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                    />
                </Box>
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {signUpLabels?.lbl_zip}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                    />
                </Box>
            </Box>
            <br/>
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {commonLabels?.lbl_choose_country}
                </Typography>
                <Autocomplete
                    fullWidth
                    disablePortal
                    options={json?.IsdCountries || []}
                    getOptionLabel={(option: any) => option?.CountryName + " " + option?.ISDCode}
                    // isOptionEqualToValue={(option, value) => option?.ISDID === value?.ISDID}
                    renderInput={(params) => <TextField {...params} fullWidth />}
                />
            </Box>
            <br />
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {signUpLabels?.lbl_mobile}
                </Typography>
                <TextField
                    id=""
                    label=""
                    fullWidth
                />
            </Box>
            <br />
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {signUpLabels?.lbl_email}
                </Typography>
                <TextField
                    id=""
                    label=""
                    fullWidth
                />
            </Box>
            <br />
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {signUpLabels?.lbl_password}
                </Typography>
                <TextField
                    id=""
                    label=""
                    value={""}
                    fullWidth
                />
            </Box>
            <br />
            <Box width="100%">
                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                    {signUpLabels?.lbl_default_language}
                </Typography>
                <TextField
                    id=""
                    value={language?.LanguageName}
                    fullWidth
                />
            </Box>
            <br />
            <Button variant="contained" color="primary" size='large' fullWidth>
                {signUpLabels?.lbl_update}
            </Button>
            <br /> <br />
        </>
    )
}

export default ProfileEditForm


const gridStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px'
}