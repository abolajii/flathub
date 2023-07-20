import { FlatHub } from '../../api';


const createProfile = async (profileData) => {
    const response = await FlatHub.post('/user/profile', profileData);
    return response.data;
};

const updateProfile = async (profileData) => {
    const response = await FlatHub.put('/user/profile', profileData);
    return response.data;
};

const getProfile = async () => {
    const response = await FlatHub.get(`/user/profile`);
    return response.data;
};

const getUser = async () => {
    const response = await FlatHub.get(`/user`);
    return response.data;
};

const getPlans = async () => {
    const response = await FlatHub.get(`/subscription-plans`);
    return response.data;
};

const profileService = {
    createProfile,
    updateProfile,
    getProfile,
    getUser,
    getPlans
};

export default profileService;