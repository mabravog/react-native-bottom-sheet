import React, { useContext } from 'react'

const Context = React.createContext<{ 
    visible: boolean
    open: (children: React.ReactNode) => void
    close: () => void
}>({
    visible: false,
    open: () => undefined,
    close: () => undefined,
})

export const useBottomSheetContext = () => {
    return useContext(Context)
}

export default Context