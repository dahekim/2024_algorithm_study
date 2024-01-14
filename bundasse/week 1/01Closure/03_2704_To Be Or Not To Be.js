var expect = function(val) {
    return{
        toBe:(n) => {
            if(n === val){
                return true
            }else{
                throw new Error("Not Equal")
            }
        },
        notToBe: (n) => {
            if(n === val){
                throw new Error("Equal")
            }else{
                return true
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
/*
expect 안에 객체가 들어간다. 객체 속성으로는 toBe, notToBe 두 개가 존재한다.
각각의 value는 함수가 된다.
toBe는 expect의 인자와 toBe의 인자가 같으면 true 리턴, 같지 않을 시 Error로 throw.
notToBe의 경우 반대로 작동한다.

에러를 지정할 때(이걸 '예외처리'라고 한다)에는 throw 문을 사용한다. https://velog.io/@nemo/throw 참조
*/