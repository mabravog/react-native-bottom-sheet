import React, { useEffect } from 'react'
import { useBottomSheetContext } from './BottomSheetContext';

const BottomSheet = (props: { visible: boolean, onClose: () => void, children: React.ReactNode }) => {
    const context = useBottomSheetContext()
    useEffect(() => {
        if (props.visible) {
            context.open(props.children)
        } else {
            context.close()
            props.onClose && props.onClose()
        }
    }, [props.visible])
    useEffect(() => {
        if (!context.visible) {
            props.onClose()
        }
    }, [context.visible])
    return <></>
}

export default BottomSheet