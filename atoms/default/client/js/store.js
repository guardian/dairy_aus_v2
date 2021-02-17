const { createStore } = require("redux");

let initial = {
    dataLoaded: false
}

const rootReducer = (state = initial, action) => {
    if (action.type === 'INIT') {
        return {...action.payload, dataLoaded: true};
    }
    return state;
}

const url = 'https://interactive.guim.co.uk/docsdata/1pbTxsfU8O_RBB-RqieqCUzGLrC8gdMaLcHKuXKFA-fY.json';

// export default fetch(`${url}?t=${new Date().getTime()}`)
// .then(resp=> resp.json())
// .then(data=> {
//     initial = data;
//     return createStore( rootReducer );
// })
// // .then(setTimeout(this.intro, 2000))
// // .then(this.intro)
// .catch(err => {
//     console.log(err);
//     return createStore( rootReducer );
// });
const store = createStore( rootReducer );

fetch(`${url}?t=${new Date().getTime()}`)
.then(resp=> resp.json())
.then(data=> {
    // initial = data.sheets;
    console.log("store resolved", data.sheets);
    store.dispatch({type:"INIT", payload: data.sheets});
})
// .then(setTimeout(this.intro, 2000))
// .then(this.intro)
.catch(err => {
    console.log(err);
    // return {};
});

export default store;