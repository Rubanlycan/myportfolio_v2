
import { getAnalytics, logEvent } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import { Credentials } from "../config";

const { firebase_api_key, firebase_app_id, firebase_auth_domain, firebase_measurement_id, firebase_message_sender_id, firebase_project_id, firebase_storage_bucket } = Credentials
const firebaseConfig = {
    apiKey: firebase_api_key,
    authDomain: firebase_auth_domain,
    projectId: firebase_project_id,
    storageBucket: firebase_storage_bucket,
    messagingSenderId: firebase_message_sender_id,
    appId: firebase_app_id,
    measurementId: firebase_measurement_id
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const WebAnalytics = async (eventName, eventProperties) => {
    try {
        await logEvent(analytics, eventName, eventProperties)
    } catch (ex) { console.log(ex) }

}

