const mood = document.querySelector('#root');
const happyBtn = document.querySelector('#happy');
const sadBtn = document.querySelector('#sad');
const angryBtn = document.querySelector('#angry');
const confusedBtn = document.querySelector('#confused');


happyBtn.addEventListener('click', function () {
    store.dispatch({ type: "Happy" });
    const m = store.getState().mood;
    mood.innerHTML = m;
})
sadBtn.addEventListener('click', function () {
    store.dispatch({ type: "Sad" });
    const m = store.getState().mood;
    mood.innerHTML = m;
})
angryBtn.addEventListener('click', function () {
    store.dispatch({ type: "Angry" });
    const m = store.getState().mood;
    mood.innerHTML = m;
})
confusedBtn.addEventListener('click', function () {
    store.dispatch({ type: "Confused" });
    const m = store.getState().mood;
    mood.innerHTML = m;
})