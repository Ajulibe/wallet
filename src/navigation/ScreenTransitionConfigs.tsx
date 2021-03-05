import { Easing } from "react-native";


const SCREEN_TRANSITION = {
    // BASIC CONFIGURATION 
    config: {
        animation: "spring",
        config: {
            stiffness: 1000,
            damping: 50,
            mass: 3,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01
        }
    },
    closeConfig: {
        animation: "timing",
        // config: {
        //     duration: 500,
        //     easing: Easing.linear
        // },
        // config: Pick<TimingAnimationConfig, "delay" | "easing" | "duration">;
    }


}

export default SCREEN_TRANSITION;