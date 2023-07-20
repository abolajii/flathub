import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createProfile, updateProfile, reset, getProfile } from '../../../redux/profile/profileSlice';


const AddProfile = () => {
    const { profile, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.profile
    );
    const [formData, setFormData] = useState({});
    const [msg, setMsg] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (isError) {
            setMsg(message);
        }
        dispatch(getProfile());


        // if (isSuccess || profile) {
        //     navigate('/user/profile/add');
        // }

        return () => {
            setFormData(profile);
            dispatch(reset());
        };
    }, []);



    // console.log(profile, "Profile");


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const {
        sex,
        dob,
        whatsapp,
        linkedin,
        facebook,
        city,
        state,
        country,
        alertMsg
    } = formData;

    // console.log(formData, "FormData");

    const submitHandler = e => {
        e.preventDefault();

        const profileData = {
            sex,
            dob,
            whatsapp,
            linkedin,
            facebook,
            city,
            state,
            country,
            alertMsg
        };
        // if (profile !== null) {
        //     dispatch(updateProfile(profileData));
        //     setMsg('All fields are required');
        // } else {
        dispatch(createProfile(profileData));
        // }

    };

    return (
        <div className=" py-12 bg-white sm:py-16 lg:py-20">
            <div className="">
                <p className="text-base font-bold text-gray-900">Profile Information</p>
                <p className="mt-1 text-sm font-medium text-gray-500">Set up your profile so we can provide the best of service to you.</p>
                <p>{msg}</p>
            </div>

            <form onSubmit={submitHandler} className="max-w-3xl mt-12">
                <div className="space-y-8">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Sex </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                <select
                                    onChange={onChange}
                                    value={sex}
                                    className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Date of Birth </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                <div>
                                    <input onChange={onChange}
                                        value={dob} type="date" name="dob" id="" placeholder="" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> WhatsApp Number </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <input onChange={onChange}
                                value={whatsapp} type="text" name="whatsapp" id="whatsapp" placeholder="08012344566" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> LinkedIn Link </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <input onChange={onChange}
                                value={linkedin} type="text" name="linkedin" id="linkedin" placeholder="linkedin.com/in/username" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Facebook  </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <input onChange={onChange}
                                value={facebook} type="text" name="facebook" id="facebook" placeholder="facebook.com/username" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>


                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> City </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <input onChange={onChange}
                                value={city} type="text" name="city" id="city" placeholder="" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />


                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> State </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={onChange}
                                value={state} type="text" name="state" id="state" placeholder="" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Country </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <select onChange={onChange} value={country} name="country" id="country"
                                className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option>Nigeria</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Report Schedule </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <select className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option>Monthly</option>
                                <option>Quarterly</option>
                            </select>
                        </div>
                    </div> */}
                    <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Alerts </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                            <select onChange={onChange} name="alertMsg" id="alertMsg"
                                className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                <option>SMS</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-12">
                    <button

                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProfile;