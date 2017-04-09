import * as types from './actionTypes';

export function loadHobbiesSuccess(hobbies) {
    return { type: types.LOAD_HOBBIES_SUCCESS, hobbies };
}

// export function createCourseSuccess(course) {
//   return {type: types.CREATE_COURSE_SUCCESS, course}
// }

// export function updateCourseSuccess(course) {
//   return {type: types.UPDATE_COURSE_SUCCESS, course}
// }

// export function deleteCourseSuccess(course) {
//   return {type: types.DELETE_COURSE_SUCCESS, course}
// }

export function loadHobbies() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {
        let hobbies = {
            name: "hobby",
            id: 1
        };
        return dispatch(loadHobbiesSuccess(hobbies));
    };
}
