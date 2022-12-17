import React, { useRef, useState } from 'react'
import { Pressable, Animated, Dimensions, StatusBar } from 'react-native';
import Context from './BottomSheetContext';

const BottomSheetProvider = (props: { children: React.ReactNode }) => {
    const bottomOffset = useRef(-(Dimensions.get('screen').height)).current
    const duration = useRef(300).current
    const maxHeight = useRef(Dimensions.get('window').height - (StatusBar.currentHeight || 0)).current
    const bottom = useRef(new Animated.Value(bottomOffset)).current
    const [visible, setVisible] = useState(false)
    const [children, setChildren] = useState<React.ReactNode>()
    const open = (children: React.ReactNode) => {
        setChildren(children)
        setVisible(true)
        Animated.timing(bottom, {
            toValue: 0,
            duration,
            useNativeDriver: false,
        }).start()
    }
    const close = () => {
        Animated.timing(bottom, {
            toValue: bottomOffset,
            duration,
            useNativeDriver: false,
        }).start(() => setVisible(false))
    }
    return <Context.Provider value={{ visible, open, close }}>
        {props.children}
        {visible ? <>
            <Pressable onPress={close} style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.25)', alignItems: 'center', justifyContent: 'center' }} />
            <Animated.View
                style={{
                    position: 'absolute',
                    bottom: bottom,
                    zIndex: 2,
                    padding: 24,
                    width: '100%',
                    maxHeight,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                }}
            >
                {children}
            </Animated.View>
        </> : undefined}
    </Context.Provider>
}

export default BottomSheetProvider
