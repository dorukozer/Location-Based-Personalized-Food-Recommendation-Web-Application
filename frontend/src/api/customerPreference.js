import axios from "axios";

const url = "http://127.0.0.1:8000";

export const postCuisinePreference = async (userPreference) => {
    const predData = await axios.post(
        `${url}/user/newuser/cuisine`,
        userPreference
    );

    return predData;
};

export const postAmbiancePreference = async (userPreference) => {
    const predData = await axios.post(
        `${url}/user/newuser/ambiance`,
        userPreference
    );

    return predData;
};

export const postFlavorPreference = async (userPreference) => {
    const predData = await axios.post(
        `${url}/user/newuser/flavor`,
        userPreference
    );

    return predData;
};

export const postInterestPreference = async (userPreference) => {
    const predData = await axios.post(
        `${url}/user/newuser/interest`,
        userPreference
    );

    return predData;
};

export const fetchInterestPreference = async (userPreference) => {
    const predData = await axios.get(
        `${url}/user/newuser/interest`,
        userPreference
    );

    return predData;
};
