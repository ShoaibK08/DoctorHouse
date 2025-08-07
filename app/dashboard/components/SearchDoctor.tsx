'use client'
import React from 'react'
import {
    useTheme,
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Box,
    Typography,
} from '@mui/material'
import { ALL_LANGUAGES } from '@/utils/constants'
import languageStore from '@/zustand/languageStore'

const SearchDoctor = () => {
    const { getLabels, language, json } = languageStore()
    const theme = useTheme()
    const mode = theme.palette.mode

    const [selectedLanguage, setSelectedLanguage] = React.useState('')
    const [selectedSpeciality, setSelectedSpeciality] = React.useState('')

    const handleLanguageChange = (event: any) => {
        setSelectedLanguage(event.target.value as string)
    }

    const handleSpecialityChange = (event: any) => {
        setSelectedSpeciality(event.target.value as string)
    }

    return (
        <>
            <Box mt={1}>
                                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                    Select language
                </Typography>
                <FormControl fullWidth size="small">
                    <Select
                        value={selectedLanguage}
                        displayEmpty
                        onChange={handleLanguageChange}
                        renderValue={(selected) =>
                            selected ? ALL_LANGUAGES.find((item) => item.LanguageID?.toString() === selected)?.LanguageName
                                : <span style={{ color: '#8F8EA4' }}>Select Language</span>
                        }
                    >
                        <MenuItem disabled value="">
                            Select Language
                        </MenuItem>
                        {ALL_LANGUAGES.map((item) => (
                            <MenuItem key={item.LanguageID} value={item.LanguageID}>
                                <Box
                                    component="li"
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: 1,
                                        '& > img': { mr: 1, flexShrink: 0 }
                                    }}
                                >
                                    {item.CountryCode && (
                                        <img
                                            loading="lazy"
                                            width="20"
                                            srcSet={`https://flagcdn.com/w40/${item.CountryCode.toLowerCase()}.png 2x`}
                                            src={`https://flagcdn.com/w20/${item.CountryCode.toLowerCase()}.png`}
                                            alt=""
                                        />
                                    )}
                                    {item.LanguageName}
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box mt={2}>
                                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                    Speciality
                </Typography>
                <FormControl fullWidth size="small">
                    <Select
                        value={selectedSpeciality}
                        displayEmpty
                        onChange={handleSpecialityChange}
                        renderValue={(selected) =>
                            selected
                                ? json?.specialities?.find((item) => item.Speciality1 === selected)?.Speciality1
                                : <span style={{ color: '#8F8EA4' }}>Select Specialization</span>
                        }
                    >
                        <MenuItem disabled value="">
                            Select Specialization
                        </MenuItem>
                        {(json?.specialities || []).map((item, index) => (
                            <MenuItem key={index} value={item.Speciality1}>
                                {item.Speciality1}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Box mt={4}>
                <Button variant="contained" color="primary" fullWidth size="large">
                    Search
                </Button>
            </Box>
        </>
    )
}

export default SearchDoctor
