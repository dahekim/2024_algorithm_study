var cancellable = function(fn, args, t) {
    const time = setTimeout(() => fn(...args),t)
    return cancelFn = () => clearTimeout(time)
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
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
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */


/*
t초후 fn을 실행할 것.
setTimemout으로 cancelTimeMs 후에 cancelFn을 실행시킬건데
cancelFn을 실행하면 fn함수가 실행되지 않도록 하기.
처음엔 문제를 이해하는데 쪼까 고생했지만 평범하게 clearTimeout을 쓰는 것이었다...
*/