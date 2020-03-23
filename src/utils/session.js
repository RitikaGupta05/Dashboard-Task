
// session kyes
export const APP_NAME = 'app-name'
export const CONTENT_TYPE = 'Content-Type'
export const TOKEN  = 'Authorization'
// creating session class
export class SessionHelper {
   // fetching header
    static getHeader(contentType = 'application/json') {
        return {
            [CONTENT_TYPE]: contentType,
            [TOKEN]: 'Bearer tTU3gFVUdP'
            
        }
    }
}