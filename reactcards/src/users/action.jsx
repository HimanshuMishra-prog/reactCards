
export const userDataInitialize = () => ( {
    type : "USER_DATA_INITALIZE"
})

export const userDataSuccess = (data) => ({
    type : "USER_DATA_SUCCESS",
    payload : data
})

export const userDataFailure = (data) => ({
    type : "USER_DATA_FAILURE",
    payload : data
})