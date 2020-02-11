import { AsyncStorage } from 'react-native';

/**
 * This is an class storage helper
 * this class handles asyncStorage actions
 */
class AsyncStorageHelper {

    // -- logic -- //

    /**
     * @name getItem
     * @desc get item action
     * @param key
     * @returns {Promise<string>}
     */
    static getItem(key) {
        return AsyncStorage.getItem(key);
    }

    /**
     * @name getItem
     * @desc get item action
     * @param key
     * @param value
     * @returns {Promise<string>}
     */
    static setItem(key, value) {
        return AsyncStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    }

    /**
     * @name removeItem
     * @desc remove Item action
     * @param key
     * @returns {Promise<string>}
     */
    static removeItem(key) {
        return AsyncStorage.removeItem(key);
    }

    /**
     * @name clear
     * @desc clear Item action
     * @returns {Promise<string>}
     */
    static clear() {
        return AsyncStorage.clear();
    }
}

export default AsyncStorageHelper;