import {Platform, ToastAndroid} from "react-native";
import {ListItems} from './StyleComponents'
 const TOAST =  (msg, duration, position=ToastAndroid.CENTER) => {
    //Check if duration = short or long
        try {
            const durationCheck = duration === "short" ? ToastAndroid.SHORT:ToastAndroid.LONG;
            //Check and choose which option user chooses else return center.
            switch(position){

                case "top":
                    position = ToastAndroid.TOP;
                    break;
                case "bottom":
                    position = ToastAndroid.BOTTOM;
                    break;
                default:
                    position = ToastAndroid.CENTER

            }
            // Check platform if android show toast else if ios show alert
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















export {ListItems}
export default TOAST
