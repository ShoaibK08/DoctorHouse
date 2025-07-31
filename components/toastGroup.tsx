import { toast } from "react-hot-toast"

export const errorAlert = (text: any, position: any) => {
    toast.error(text, {
        duration: 4000,
        position,
    })
}

export const successAlert = (text: any, position: any) => {
    toast.success(text, {
        duration: 4000,
        position,
    })
}
