import messaging from "@react-native-firebase/messaging"

async function NotificationServices() {
    //getInitialNotification: When the application is opened from a quit state.
    try {
        const message = await messaging().getInitialNotification();
        console.log(message);
    } catch (error) {
        console.log("getInitialNotification error - ", error)
    }



    //onNotificationOpenedApp: When the application is running, but in the background.
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
        console.log("notification caused app to open from background state.")
        console.log(remoteMessage);
    })
    console.log("unsubscribe notification --- > ", unsubscribe);


    //foreground message 
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
        console.log(remoteMessage);
    });
    console.log("unsubscribeForeground notification --- >>",unsubscribeForeground);


}

export default NotificationServices;