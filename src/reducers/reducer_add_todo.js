import {ADD_TODO, DELETE_TODO,EDIT_TODO,EDIT_ITEM_MODE} from '../actions/index';
export default function(state = [], action){
	var stateArr = state.slice(0)
	switch(action.type){
		case ADD_TODO :
		//We can also use state.concat([action.payload.data]) as it dont mutate state
			return [ ...state, {term:action.payload, isEditMode:false}]
		case DELETE_TODO :
			return [...state.slice(0,action.payload), ...state.slice(action.payload+1)]
		case EDIT_TODO :
			stateArr[action.payload.index] = {
				term:action.payload.term,
				isEditMode:false
			}
			return stateArr
		case EDIT_ITEM_MODE :
			stateArr[action.payload].isEditMode=true;
			return stateArr
	}
	return state
}