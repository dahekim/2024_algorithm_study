var cancellable = function(fn, args, t) {
    fn(...args)
    const time = setInterval(() => fn(...args),t)
    return cancelFn = () => clearInterval(time)
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *   
 *  setTimeout(() => {
 *      console.log(result); // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 *  }, cancelTimeMs + t + 15)    
 */

/*
뭔가 많아보이지만 setTimeout이 아니라 일정시간마다 실행하는 setInterval이 된 것 뿐.
0초에도 실행을 시켜줘야 하기 때문에 처음에는 그냥 fn(...args)를 끼워주었습니다.

*/