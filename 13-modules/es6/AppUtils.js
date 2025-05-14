export default class AppUtils {
    static getBaseUrl() {
        return 'https://www.techglobal-training.com'
    }

    static getValidLoginCredentials() {
        return {
            username: 'TechGlobal',
            password: 'Test1234'
        }
    }
}

export const pi = 3.14;
export function printHi() {
    console.log('Hi');
}