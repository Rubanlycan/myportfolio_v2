
const { REACT_APP_APIKEY, REACT_APP_AUTH_DOMAIN, REACT_APP_PROJECT_ID, REACT_APP_STORAGE_BUCKET, REACT_APP_MESSAGE_SENDER_ID, REACT_APP_APP_ID, REACT_APP_MEASUREMENT_ID, REACT_APP_LOCAL_API } = process.env
export const Credentials = {
    firebase_api_key: REACT_APP_APIKEY,
    firebase_auth_domain: REACT_APP_AUTH_DOMAIN,
    firebase_project_id: REACT_APP_PROJECT_ID,
    firebase_storage_bucket: REACT_APP_STORAGE_BUCKET,
    firebase_message_sender_id: REACT_APP_MESSAGE_SENDER_ID,
    firebase_app_id: REACT_APP_APP_ID,
    firebase_measurement_id: REACT_APP_MEASUREMENT_ID,
    auth_url: REACT_APP_LOCAL_API,

}