import {Platform, ToastAndroid} from "react-native";




 const TOAST =  (msg, duration, position=ToastAndroid.CENTER) => {

    //Check if duration = short or long

        try {
            const durationCheck = duration === "short" ? ToastAndroid.SHORT:ToastAndroid.LONG;

            if (Platform.OS !== "ios") {
                ToastAndroid.showWithGravity(msg, durationCheck, position );
            }
            else {
                alert(msg)
            }

        } catch (error) {
            console.log("TOAST ERROR: msg must be string  ")
        }

};


 export default TOAST