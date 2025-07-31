'use client'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Autocomplete, Avatar, Box, Button, Checkbox, Collapse, FormControl, FormControlLabel, FormLabel, IconButton, InputAdornment, Radio, RadioGroup, Switch, Typography } from '@mui/material'
import { primary } from '@/utils/colors';
import languageStore from '@/zustand/languageStore';
import Link from 'next/link';
import Image from 'next/image';

const RegisterForm = () => {
    const { getLabels, language, json } = languageStore()
    // const { IsdCountries, specialities }: any = json
    const signUpLabels = getLabels('SignUp') as any
    const commonLabels = getLabels('Common') as any

    const [profession, setProfession] = React.useState("doctor");

    const handleProfessionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProfession(event.target.value);
    };
    return (
        <>
            <Box sx={{ width: "205px", mx: 'auto' }}>
                <Image src="/logo.png" alt='logo' width={300} height={50} layout='responsive' />
            </Box>
            <br />
            <Box width="100%" >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb="20px">
                    <Typography variant="h6" fontWeight={600} color="#000" mb="15px">
                        Let’s {signUpLabels?.lbl_signup}
                    </Typography>
                    <Box display="flex" alignItems="flex-end">
                        <Avatar src='/assets/avatar.png' sx={{ width: '132px', height: '132px' }} />
                        <IconButton sx={{ ml: '-40px', zIndex: '10' }}>
                            <img src="/icons/edit-new.svg" alt="" />
                        </IconButton>
                    </Box>
                </Box>
                <br />
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
                <br />
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
                    // slotProps={{
                    //     input: {
                    //         startAdornment: <InputAdornment position="start" sx={{ background: "#000",margin: }}>91</InputAdornment>,
                    //     },
                    // }}
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
                <Box>
                    <FormControl>
                                            <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                            {signUpLabels?.lbl_doctor}
                        </Typography>
                        <RadioGroup
                            row
                            aria-labelledby="profession-radio-group-label"
                            name="profession"
                            value={profession}
                            onChange={handleProfessionChange}
                        >
                            <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                            <FormControlLabel value="Veterinary" control={<Radio />} label="Veterinary" />
                        </RadioGroup>
                    </FormControl>

                </Box>
                {/* <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
                                        <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                        {signUpLabels?.lbl_doctor}
                    </Typography>
                    <Switch
                        checked={isDoctor}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Box> */}
                <br />
                <Collapse in={profession === "doctor"} timeout="auto" unmountOnExit>
                    <Box>
                        <Box width="100%">
                                                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                                ?? BIO
                            </Typography>
                            <TextField
                                id=""
                                label=""
                                value={""}
                                fullWidth
                            />
                        </Box>
                        <br />
                        <Box sx={gridStyle}>
                            <Box width="100%">
                                                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                                    {signUpLabels?.lbl_pricefrom}
                                </Typography>
                                <TextField
                                    id=""
                                    label=""
                                    value={""}
                                    fullWidth
                                />
                            </Box>
                            <Box width="100%">
                                                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                                    {signUpLabels?.lbl_priceto}
                                </Typography>
                                <TextField
                                    id=""
                                    label=""
                                    value={""}
                                    fullWidth
                                />
                            </Box>
                        </Box>
                        <br />
                        <Box width="100%">
                                                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                                {signUpLabels?.lbl_medical_registration_number}
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

                                {commonLabels?.lbl_choose_specialization}
                            </Typography>
                            <Autocomplete
                                fullWidth
                                disablePortal
                                options={json?.specialities || []}
                                getOptionLabel={(option: any) => option?.Speciality1}
                                // isOptionEqualToValue={(option, value) => option?.ISDID === value?.ISDID}
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            />
                        </Box>
                        <br />
                    </Box>
                </Collapse>
                <Box>
                    <Box display="flex" alignItems="flex-start" gap='5px' mb='10px'>
                        <Checkbox size='small' sx={{ p: '3px 5px 5px 0' }} />
                        <Typography variant="body2" color="text.primary">
                            {signUpLabels?.lbl_policy1} <Link href="/" style={{ color: primary }}><b>{signUpLabels?.lbl_policy2}</b></Link> {signUpLabels?.lbl_policy3}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="flex-start" gap='5px' mb='10px'>
                        <Checkbox size='small' sx={{ p: '3px 5px 5px 0' }} />
                        <Typography variant="body2" color="text.primary">
                            {signUpLabels?.lbl_legal1} <Link href="/" style={{ color: primary }}><b>{signUpLabels?.lbl_legal2}</b></Link> {signUpLabels?.lbl_legal3}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="flex-start" gap='5px' mb='10px'>
                        <Checkbox size='small' sx={{ p: '3px 5px 5px 0' }} />
                        <Typography variant="body2" color="text.primary">
                            {signUpLabels?.lbl_profile1} <Link href="/" style={{ color: primary }}><b>{signUpLabels?.lbl_profile2}</b></Link> {signUpLabels?.lbl_profile3}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.primary">
                        {signUpLabels?.lbl_eula1} <br />  {signUpLabels?.lbl_eula3} <br />
                        <Link href="/" style={{ color: primary }}><b>{signUpLabels?.lbl_eula2}</b></Link>
                    </Typography>
                </Box>
                <br />
                <Button variant="contained" color="primary" size='large' fullWidth>
                    <Link href="/dashboard" style={{ color: '#fff', textDecoration: 'none' }}>
                        {signUpLabels?.lbl_signup}
                    </Link>
                </Button>
            </Box >
        </>
    )
}

export default RegisterForm

const gridStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px'
}