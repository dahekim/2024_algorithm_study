class EventEmitter {
    constructor () {
        this.events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if(!this.events[eventName]){
            this.events[eventName] = []
        }
        const cb = {callback}
        this.events[eventName].push(cb)

        return {
            unsubscribe: () => {
                const index = this.events[eventName].indexOf(cb);
                this.events[eventName].splice(index, 1)
                return undefined
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const listeners = this.events[eventName]
        if(!listeners){
            return []
        }
        return listeners.map((listener) => {
            return listener.callback(...args)
        })
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */