

const INITIAL_STATE = { mood: "" }

function moodChanger(state = INITIAL_STATE, action) {

    switch (action.type) {
        case "Happy":
            return { ...mood, mood: state.mood = '(◕‿◕)' };
        case "Sad":
            return { ...mood, mood: state.mood = '⊙︿⊙' };
        case "Confused":
            return { ...mood, mood: state.mood = ' (@_ @) ' };
        case "Angry":
            return { ...mood, mood: state.mood = 'ಠ_ಠ' };
    }

    return state;
}
const store = Redux.createStore(moodChanger);

