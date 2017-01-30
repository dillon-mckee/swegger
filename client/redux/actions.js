import fetch from 'isomorphic-fetch'

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        data
    };
};

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = (error) => {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    };
};

export const fetchData = () => {
      return (dispatch) => {
       let headers = new Headers();
       let url = 'http://localhost:3000/api/data';
       return fetch(url, headers).then((response) => {
            if (response.status < 200 || response.status >= 300) {
                let error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return dispatch(
                fetchDataSuccess(data)
            );
        })
        .catch((error) => {
            return dispatch(
                fetchDataError(error)
            );
        });
    }
};

export const OPEN_MODAL = 'OPEN_MODAL';
export const openModal = () => {
    return {
        type: OPEN_MODAL
    };
};

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
