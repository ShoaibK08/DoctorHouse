'use client'
import { getLanguageJson } from '@/api/apiHelper'
import { Language } from '@/types'
import { ALL_LANGUAGES } from '@/utils/constants'
import { LoadingButton } from '@mui/lab'
import {
    Box,
    Dialog,
    DialogContent,
    FormControl,
    InputLabel,
    LinearProgress,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { errorAlert } from './toastGroup'
import languageStore from '@/zustand/languageStore'

const SelectLanguage = () => {
    const router = useRouter()
    const { setLanguageJsonData, setLanguageInfo } = languageStore()

    const [loading, setLoading] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [languageId, setLanguageId] = React.useState('')

    // Called on select change — store selection only
    const handleLanguageSelect = (event: SelectChangeEvent<string>) => {
        setLanguageId(event.target.value)
    }

    // Called on button click — perform API call
    const handleApplyLanguage = async () => {
        if (!languageId) {
            errorAlert("Please select a language first", 'top-center')
            return
        }

        setLoading(true)
        try {
            const response = await getLanguageJson(languageId)
            setLanguageJsonData(response?.data)

            const languageInfo = response?.data?.languages?.find(
                (item: Language) => item.LanguageID === Number(languageId)
            )

            setLanguageInfo(languageInfo)
            setLoading(false)
            router.push('/auth/login')
        } catch (error) {
            setLoading(false)
            errorAlert('Something went wrong', 'top-center')
        }
    }

    return (
        <>
            <Box width="100%">
                <Typography variant="body1" fontWeight={600} gutterBottom>
                    Select language
                </Typography>

                <FormControl fullWidth>
                    <Select
                        displayEmpty
                        value={languageId}
                        onChange={handleLanguageSelect}
                        renderValue={
                            languageId !== '' ? undefined : () => <span style={{ color: '#aaa' }}>Select Language</span>
                        }
                    >
                        <MenuItem disabled value="">
                            Select Language
                        </MenuItem>
                        {ALL_LANGUAGES?.map((item: Language, index: number) => (
                            <MenuItem key={index} value={item.LanguageID}>
                                {item?.LanguageName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


                <br />
                <br />
                <br />

                <LoadingButton
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ px: '70px' }}
                    onClick={handleApplyLanguage}
                    loading={loading}
                >
                    Select
                </LoadingButton>
            </Box>
        </>
    )
}

export default SelectLanguage
