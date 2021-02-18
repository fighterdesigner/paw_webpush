/***** Service Worker ***********/
const registerServiceWorker = async () => {

    const swRegistration = await navigator.serviceWorker.register('./sw.js');
    
    return swRegistration;
        
  }
/***********************/


/******** Ask for notifications permission **********/

const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
    }
    
}
/*********************************************/

/********* Push Local Notifications ****************/

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body,
        "icon": "../img/pwa-512x512.png",
        "renotify": "",
        "requireInteraction": true,
        "data": "This is a test of a pwa",
        // here you can add more properties like icon, image, vibrate, etc.
    };   
    
    
    swRegistration.showNotification(title, options);
    
    
}
/*********************************************/

/*********************************************/

const main = async () => {
    const swRegistration = await registerServiceWorker();
    const permission = await requestNotificationPermission();
    showLocalNotification('Welcome into our website', 'Make sure to subscribe in our newsletter you may get good offers', swRegistration);
}
main();
/******************************************/