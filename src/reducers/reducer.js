// INITIAL STATE

const initialState = {
    // test: 'test',
    // asyncTest: 'asyncTest',
    // isLoading: false
}

// ACTION CONSTANTS

const PENDING = '_PENDING'
const FULFILLED = '_FULFILLED'

// const TEST = 'TEST'
// const ASYNCTEST = 'ASYNCTEST'


// REDUCER

export default function reducer(state = initialState, action) {
    switch(action.type) {
        // case TEST: 
        //     return Object.assign({}, state, {test: action.payload})
        // case ASYNCTEST + PENDING:
        //     return Object.assign({}, state, {isLoading: true})
        // case ASYNCTEST + FULFILLED:
        //     return Object.assign({}, state, {asyncTest: action.payload, isloading: false})

        default:
            return state
    }
}


// ACTION CREATORS 

// export function testActionCreator() {
//     return {
//         type: TEST,
//         payload: 'test is working!'
//     }
// }

// export function testAsyncActionCreator() {
//     console.log('async init');
//     return {
//         type: ASYNCTEST, 
//         payload: new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('async test complete')
//             }, 3000)
//         }).then(res => res)
//     }
// }