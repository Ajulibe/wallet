import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Button } from 'react-native';
import Image from 'react-native-scalable-image';
import * as LocalAuthentication from 'expo-local-authentication';
import IMAGES from '../../utils/Images'

const LocalAuth = (props: { onCancel: () => void, onFingerCaptured: (isCaptured: boolean) => void }) => {
    const [compatible, isCompatible] = useState(false);
    const [fingerPrints, setFingerPrints] = useState(false);


    useEffect(() => {
        checkDeviceForHardware();
        checkForFingerprints();
    }, [])

    const checkDeviceForHardware = async () => {
        let compatible = await LocalAuthentication.hasHardwareAsync();
        isCompatible(compatible);
        console.log('compatible', compatible);
    }

    const checkForFingerprints = async () => {
        let fingerprints = await LocalAuthentication.isEnrolledAsync();
        setFingerPrints(fingerprints);
        console.log('fingerPrints', fingerprints)
    };

    const scanFingerprint = async () => {
        await LocalAuthentication.authenticateAsync()
            .then(res => {
                if (res.success === true) {
                    props.onFingerCaptured(true);
                    console.log(res.success+'===============')
                }
            })
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,.3)' }}>


            <View style={styles.Alert_Main_View}>


                <Text style={styles.Alert_Title}>Custom Alert Dialog Title.</Text>


                <View style={{ width: '100%', height: 2, backgroundColor: '#fff' }} />



                <View style={styles.fingerPrint}>
                    <TouchableOpacity onPress={() => scanFingerprint()}>
                        {/* <Text allowFontScaling={ false }>SCAN</Text> */}
                        <Image width={Dimensions.get('window').width / 12} style={styles.fpImage} source={IMAGES.chat} />
                        <Text style={styles.fpText} allowFontScaling={false}>One-Touch Login</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ width: '100%', height: 1, backgroundColor: '#fff' }} />


                <View style={{ flexDirection: 'row', height: '30%' }}>

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => null}
                        activeOpacity={0.7}
                    >

                        <Text style={styles.TextStyle}> OK </Text>

                    </TouchableOpacity>

                    <View style={{ width: 1, height: '100%', backgroundColor: '#fff' }} />

                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => { }}
                        activeOpacity={0.7}
                    >

                        <Text style={styles.TextStyle}> CANCEL </Text>

                    </TouchableOpacity>

                    <Button onPress={() => props.onCancel()} title="DISMISS" />
                </View>

            </View>

        </View>
    )
}

export default LocalAuth;

const styles = StyleSheet.create({
    fingerPrint: {
        alignItems: "center",
        marginTop: 25
    },
    fpImage: {
        alignSelf: "center",
        marginBottom: 8
    },
    fpText: {
        fontFamily: "pl",
        fontSize: 15,
        color: "#341931"
    },
    Alert_Main_View: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        height: 200,
        width: '90%',
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 7,
    },

    Alert_Title: {
        fontSize: 25,
        color: "#444",
        textAlign: 'center',
        padding: 10,
        height: '28%'

    },

    Alert_Message: {
        fontSize: 22,
        color: "#444",
        textAlign: 'center',
        padding: 10,
        height: '42%'

    },

    buttonStyle: {

        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'

    },

    TextStyle: {
        color: '#444',
        textAlign: 'center',
        fontSize: 22,
        marginTop: -5
    }

});