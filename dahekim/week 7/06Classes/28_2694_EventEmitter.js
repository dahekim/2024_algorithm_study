// https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript

class EventEmitter {
    // 초기화
    constructor() {
        this.listeners = {};
    }
    
    subscribe(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }        
        this.listeners[eventName].push(callback);     

        return {
            unsubscribe: () => {
                this.listeners[eventName] = this.listeners[eventName].filter(listener => listener !== callback);
                return undefined;
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.listeners[eventName]) {
            return [];
        }
        
        const results = [];
        for (const listener of this.listeners[eventName]) {
            results.push(listener(...args));
        }
    
        return results;
    }
}