// 处理行为

const actionState = {
    isLog:false
}

function counter (state = {count:0 },action) {
    const count = state.count;
    switch(action.type) {
        case 'routers':
         return { test:state.test+1 };
        case 'logins':
         alert('');
         default :
            return state;
    }
}

export default counter;