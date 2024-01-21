async function sleep(millis) {
    await new Promise(res => setTimeout(res , millis))
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

/*
실행 이후에 then이 들어가므로 promise로 말아주었습니다.
*/