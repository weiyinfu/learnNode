/**
 * 参考资料：https://www.jianshu.com/p/4a568dac41ed
 * */
const fs = require('fs');
const asyncHooks = require('async_hooks');
/**
 * console.log是异步的，在asyncHook中使用它会导致死循环
 * 在asynchook的init，before，after，destroy中都必须使用同步操作
 * */
const hook = asyncHooks.createHook({
    init(asyncId, type, triggerAsyncId, resource) {
        //1表示stdout
        fs.writeSync(1, `init: asyncId-${asyncId},type-${type},triggerAsyncId-${triggerAsyncId}\n`);
    },
    before(asyncId) {
        fs.writeSync(1, `before: asyncId-${asyncId}\n`);
    },
    after(asyncId) {
        fs.writeSync(1, `after: asyncId-${asyncId}\n`);
    },
    destroy(asyncId) {
        fs.writeSync(1, `destroy: asyncId-${asyncId}\n`);
    }
});

hook.enable();
console.log('hello');

// hook.disable();    // 注意，这里不要disable，否则只能触发init事件