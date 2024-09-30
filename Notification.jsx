import AsyncStorage from "@react-native-async-storage/async-storage";
import messaging from "@react-native-firebase/messaging"

async function Notification() {
    const authStatus = await messaging().requestPermission();
    let isEnabled = false; // Start with false
    if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        isEnabled = true; // Set to true
    }
    if (authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
        isEnabled = true; // Set to true
    }
    if (isEnabled) {
        console.log('Authorization status - ', authStatus);
        getFCMToken();
    }

}

async function getFCMToken() {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    console.log("Old FCM Token - ", fcmToken);

    if (!fcmToken) {
        try {
            await messaging().registerDeviceForRemoteMessages();
            const token = await messaging().getToken();
            console.log("New fcm token - ", token);
            await AsyncStorage.setItem("fcmToken", token);
        } catch (error) {
            console.log("Error generating new fcm token - ", fcmToken);
        }
    }
}

export default Notification;
