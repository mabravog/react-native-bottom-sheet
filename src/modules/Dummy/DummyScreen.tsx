import React, { useState } from 'react'
import { Button, View, Text, ScrollView, Modal, Pressable } from 'react-native'
import { BottomSheet } from '../../components'

const DummyScreen = ({ navigation  }) => {
    const [visible, setVisible] = useState(false)
    const [modal, setModal] = useState(false)
    return <View style={{ flex: 1 }}>
        <Button title={String(visible)} onPress={() => setVisible(!visible)} />
        <BottomSheet visible={visible} onClose={() => setVisible(false)}>
            <View testID="bottom-sheet-header" style={{ paddingBottom: 8 }}>
                <Text style={{ fontSize: 24, lineHeight: 36 }}>Hello world!</Text>
            </View>
            <ScrollView style={{ maxHeight: 300 }} bounces={false}>
                <Text>{text}</Text>
            </ScrollView>
            <Button title='modal' onPress={() => navigation.navigate("Modal")} />
        </BottomSheet>
        <Modal visible={true} transparent animationType="fade" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable onPress={() => setModal(false)} style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }} />
            <View style={{ zIndex: 2, flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {/** children */}
                    <View style={{ backgroundColor: 'white', borderRadius: 14, padding: 24 }}>
                        <Button title='modal' onPress={() => setModal(false)} />
                    </View>
                </View>
            </View>
        </Modal>
        <Modal visible={true} transparent animationType="fade" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable onPress={() => setModal(false)} style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.25)', alignItems: 'center', justifyContent: 'center' }} />
            <View style={{ zIndex: 2, flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    {/** children */}
                    <View style={{ backgroundColor: 'white', borderRadius: 14, padding: 24 }}>
                        <Button title='modal' onPress={() => setModal(false)} />
                    </View>
                </View>
            </View>
        </Modal>
    </View>
}

export default DummyScreen

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, ipsum in vulputate maximus, augue tellus convallis felis, eu viverra libero dui nec lacus. Fusce mollis aliquam lectus, eget vehicula magna dignissim non. Fusce quis rhoncus magna, a viverra risus. Quisque eleifend velit id tortor maximus, sit amet mollis purus tempor. Vivamus id auctor orci. Nulla egestas vitae sem sed consectetur. Proin ultrices sollicitudin congue. Vivamus neque leo, rhoncus id laoreet at, congue vel turpis. Vivamus facilisis ornare metus, et malesuada odio.

Fusce libero orci, gravida id massa nec, egestas porttitor neque. Nullam semper tempor elit, in auctor urna hendrerit a. Praesent blandit risus ut felis hendrerit, nec mollis est laoreet. Nam pharetra quam ac arcu tincidunt porta. Etiam blandit mollis ligula ac tincidunt. Etiam sit amet varius dui. Donec semper odio ut rhoncus aliquet. Proin faucibus, turpis id posuere ultricies, orci quam pulvinar ligula, consectetur aliquam erat nulla et libero. Fusce sit amet neque egestas, auctor purus in, gravida neque. Proin turpis ante, euismod vitae elementum ut, porttitor at ligula. Integer in dui felis. Duis posuere cursus leo, at elementum lacus congue eu. Praesent massa massa, interdum non arcu sit amet, dapibus ornare eros. Morbi tincidunt purus nec elit maximus tempus. Vivamus viverra hendrerit metus. Sed ut ultrices sem.

Fusce nec interdum est, non posuere ex. Nullam vitae mauris nisi. Duis interdum commodo diam, at feugiat ex egestas in. Nullam consequat sollicitudin fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor volutpat nibh, ac ultricies lacus imperdiet at. Cras porttitor, tortor id volutpat commodo, neque magna dapibus lectus, nec consequat ante lectus eget elit. Quisque quis magna in urna maximus finibus ac ut nisl. Integer fermentum justo enim, a scelerisque erat feugiat porttitor. Sed enim mi, tristique ac justo ut, lacinia sagittis erat. Duis sed elementum diam. Mauris hendrerit tincidunt interdum. Integer dignissim congue tortor sit amet laoreet.

Duis id nisl eu ante porttitor maximus vel vitae dolor. Vivamus id quam odio. Suspendisse potenti. Aliquam consequat est ut est bibendum, laoreet pulvinar orci interdum. Nunc eu commodo tortor. Nam eget dui eget ligula mollis rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse et fermentum nisi, ac porta sapien. Integer in dui maximus nulla tincidunt tempor. Aenean dictum urna sit amet turpis feugiat, vitae tristique nisi posuere. Suspendisse vestibulum ipsum nisl, eu vehicula justo condimentum vitae. Quisque feugiat dolor tincidunt eleifend mollis. Duis pretium mollis risus, quis pulvinar nunc ultricies convallis. Aenean porta dignissim libero quis consequat. Nulla turpis arcu, facilisis eget cursus nec, iaculis non tortor.

In hac habitasse platea dictumst. Cras vitae eros eget felis iaculis tincidunt. Ut mattis, elit sit amet interdum tincidunt, neque nunc scelerisque sapien, varius fringilla diam metus facilisis neque. Suspendisse condimentum turpis orci, eu luctus mi eleifend quis. Maecenas sed ante nibh. Nulla iaculis diam nulla, sit amet euismod ligula placerat mollis. Sed condimentum risus in ligula rhoncus consectetur.`
