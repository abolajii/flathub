import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import ErrorInput from '../../../components/ErrorInput';
import { connect } from 'react-redux';
import { createApartment, createPhoto, createProperty } from '../../../redux/properties/property.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUserProfile } from '../../../redux/profile/profile.selector';

const PostProperty = ({ createProperty, createApartment, userInfo, createPhoto }) => {

    const handleCreateProperties = (property) => {
        const newProperty = {
            landlordId: 2, // hardcoded until creation of landlord is implemented
            businessId: 1, // hardcoded until creation of business is implemented
            name: property.name,
            propertyType: property.type,
            address: property.address,
            city: property.city,
            state: property.state,
            country: property.country,
            description: property.description,
            furnishType: property.furnish_type,
            serviceType: property.service_type,
            rentalCost: property.rental_cost,
            sellingPrice: property.selling_price,
            category: property.category,
            commission: property.commission,
            startDate: property.start_date,
            endDate: property.end_date
        }

        createProperty(newProperty)
    }

    const handleCreateApartment = apartment => {
        const newApartment = {
            propertyId: 1, // hardcoded until creation of property is working
            unitType: apartment.unit_type,
            unitNumber: apartment.unit_number,
            rent: apartment.rent,
            name: apartment.name,
            description: apartment.description,
            bedrooms: apartment.bedrooms,
            commission: apartment.commission,
            commissionType: apartment.commission_type,
            status: 1,
            userId: userInfo?.userId
        }

        createApartment(newApartment)
    }
    return (
        <div className="flex flex-col flex-1 ">
            <main>
                <div className="py-6">
                    <div className="px-4 mx-auto sm:px-6 md:px-8">
                        <h1 className="text-2xl font-bold text-gray-900">Add a Property</h1>
                    </div>

                    <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                        <div className="w-full pb-1 overflow-x-auto">
                            <div className="border-b border-gray-200">
                                <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                                    role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a href="#tabs-property" className="px-6 py-3 my-2 border-x-0 border-t-0 border-b-2 border-transparent text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 focus:border-transparent hover:border-transparent hover:bg-gray-100 border-x-0 border-t-0 border-b-2 border-transparent nav-link whitespace-nowrap active" id="tabs-property-tab" data-bs-toggle="pill" data-bs-target="#tabs-property" role="tab" aria-controls="tabs-property" aria-selected="true"> Property Information </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a href="#tabs-apartment" className="px-6 py-3 my-2 border-x-0 border-t-0 border-b-2 border-transparent text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 focus:border-transparent hover:border-transparent hover:bg-gray-100 border-x-0 border-t-0 border-b-2 border-transparent nav-link whitespace-nowrap" id="tabs-apartment-tab" data-bs-toggle="pill" data-bs-target="#tabs-apartment" role="tab" aria-controls="tabs-apartment" aria-selected="true"> Apartment </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a href="#tabs-images" className="px-6 py-3 my-2 border-x-0 border-t-0 border-b-2 border-transparent text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 focus:border-transparent hover:border-transparent hover:bg-gray-100 border-x-0 border-t-0 border-b-2 border-transparent nav-link whitespace-nowrap" id="tabs-images-tab" data-bs-toggle="pill" data-bs-target="#tabs-images" role="tab" aria-controls="tabs-images" aria-selected="true"> Images </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a href="#tabs-documents" className="px-6 py-3 my-2 border-x-0 border-t-0 border-b-2 border-transparent text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 focus:border-transparent hover:border-transparent hover:bg-gray-100 border-x-0 border-t-0 border-b-2 border-transparent nav-link whitespace-nowrap" id="tabs-documents-tab" data-bs-toggle="pill" data-bs-target="#tabs-documents" role="tab" aria-controls="tabs-documents" aria-selected="true"> Documents </a>
                                    </li>

                                    <li class="nav-item" role="presentation">
                                        <a href="#tabs-tenants" className="px-6 py-3 my-2 border-x-0 border-t-0 border-b-2 border-transparent text-sm font-medium text-indigo-600 transition-all duration-200 border-b-2 focus:border-transparent hover:border-transparent hover:bg-gray-100 border-x-0 border-t-0 border-b-2 border-transparent nav-link whitespace-nowrap" id="tabs-tenants-tab" data-bs-toggle="pill" data-bs-target="#tabs-tenants" role="tab" aria-controls="tabs-tenants" aria-selected="true"> Tenants </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-content" id="tabs-tabContent">
                            <div className="tab-pane fade show active" id="tabs-property" role="tabpanel" aria-labelledby="tabs-property-tab">
                                <div className="mt-6">
                                    <p className="text-base font-bold text-gray-900">Property Info</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Add basic info of the property.</p>
                                </div>

                                <Formik
                                    initialValues={{
                                        name: '',
                                        type: '',
                                        furnish_type: '',
                                        service_type: '',
                                        category: '',
                                        description: '',
                                        address: '',
                                        city: '',
                                        state: '',
                                        rental_cost: '',
                                        selling_price: '',
                                        commission: '',
                                        start_date: '',
                                        end_date: ''
                                    }}

                                    validationSchema={
                                        Yup.object({
                                            name: Yup.string().required(),
                                            type: Yup.string().required(),
                                            furnish_type: Yup.string().required(),
                                            service_type: Yup.string().required(),
                                            category: Yup.string().required(),
                                            description: Yup.string().required(),
                                            address: Yup.string().required(),
                                            city: Yup.string().required(),
                                            state: Yup.string().required(),
                                            rental_cost: Yup.string().required(),
                                            selling_price: Yup.string().required(),
                                            commission: Yup.string().required(),
                                            start_date: Yup.string().required(),
                                            end_date: Yup.string().required()
                                        })}
                                    onSubmit={(values) => {
                                        console.log(values);

                                        handleCreateProperties(values);
                                    }}
                                >
                                    {(values, setValues, isSubmitting) => (
                                        <Form>
                                            <div className="space-y-8">
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Property Name </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <div>
                                                            <Field type="text" name="name" id="" placeholder="2 bedroom flat" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        </div>
                                                        <ErrorMessage name="name" component={ErrorInput} />
                                                    </div>

                                                </div>

                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Property Type </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='type' class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option value={''} selected>select property type</option>
                                                            <option value={'Residential'}>Residential</option>
                                                            <option value={'Office Space'}>Office Space</option>
                                                            <option value={'Ware house'}>Ware house</option>
                                                            <option value={'Hall'}>Hall</option>
                                                        </Field>

                                                        <ErrorMessage name="type" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Furnish Type </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='furnish_type' class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option value={''} selected>select from options below</option>
                                                            <option>Lease</option>
                                                            <option>Rent</option>
                                                        </Field>
                                                        <ErrorMessage name="furnish_type" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Service Type </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='service_type' class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option value={''} selected>select from options below</option>
                                                            <option>Lease</option>
                                                            <option>Rent</option>
                                                        </Field>
                                                        <ErrorMessage name="service_type" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Category </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='category' class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option value={''} selected>select from options below</option>
                                                            <option>Lease</option>
                                                            <option>Rent</option>
                                                        </Field>
                                                        <ErrorMessage name="category" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Description </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='textarea'
                                                            name="description"
                                                            id=""
                                                            placeholder="Write about you"
                                                            rows="4"
                                                            class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            spellcheck="false"
                                                        ></Field>
                                                        <ErrorMessage name="description" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Address </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='textarea'
                                                            name="address"
                                                            id=""
                                                            placeholder="Write about you"
                                                            rows="4"
                                                            class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            spellcheck="false"
                                                        ></Field>
                                                        <ErrorMessage name="address" component={ErrorInput} />
                                                    </div>
                                                </div>

                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> City </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="city" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="city" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> State </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="state" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="state" component={ErrorInput} />
                                                    </div>
                                                </div>

                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Country </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='country' className="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option>United States</option>
                                                        </Field>
                                                        <ErrorMessage name="country" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Rental Cost </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="rental_cost" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="rental_cost" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Selling Price </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="selling_price" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="selling_price" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Commission </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="commission" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="commission" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Start Date </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="date" name="start_date" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="start_date" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> End Date </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="date" name="end_date" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="end_date" component={ErrorInput} />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 sm:mt-12">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                                >
                                                    {isSubmitting ? 'Submitting' : 'Submit'}
                                                </button>
                                            </div>
                                        </Form>
                                    )}

                                </Formik>
                            </div>
                            <div className="tab-pane fade" id="tabs-apartment" role="tabpanel" aria-labelledby="tabs-apartment-tab">
                                <div className="mt-6">
                                    <p className="text-base font-bold text-gray-900">Apartment</p>
                                    <p className="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                                </div>

                                <Formik
                                    initialValues={{
                                        property_id: '',
                                        unit_type: '',
                                        unit_number: '',
                                        rent: '',
                                        name: '',
                                        description: '',
                                        bedrooms: '',
                                        commission: '',
                                        commission_type: '',
                                        status: ''
                                    }}

                                    validationSchema={
                                        Yup.object({
                                            unit_type: Yup.string().required(),
                                            unit_number: Yup.string().required(),
                                            rent: Yup.string().required(),
                                            name: Yup.string().required(),
                                            bedrooms: Yup.string().required(),
                                            description: Yup.string().required(),
                                            commission: Yup.string().required(),
                                            commission_type: Yup.string().required(),
                                            // status: Yup.string().required(),
                                        })}

                                    onSubmit={(values) => {
                                        console.log(values);

                                        handleCreateApartment(values)
                                    }}
                                >
                                    {(values, setValues, isSubmitting) => (
                                        <Form>
                                            <div className="space-y-8">


                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Unit Number </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                                            <div>
                                                                <Field type="text" name="unit_number" id="" placeholder="Unit Number" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                                <ErrorMessage name="unit_number" component={ErrorInput} />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Unit Type </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='unit_type' class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option>Lease</option>
                                                            <option>Rent</option>
                                                        </Field>
                                                        <ErrorMessage name="unit_type" component={ErrorInput} />
                                                    </div>
                                                </div>
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Unit Name </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                                            <div>
                                                                <Field type="text" name="name" id="" placeholder="Two bedroom flat" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                                <ErrorMessage name="name" component={ErrorInput} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Rent </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                                            <div>
                                                                <Field type="text" name="rent" id="" placeholder="" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                                <ErrorMessage name="rent" component={ErrorInput} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Bedrooms </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="bedrooms" id="" placeholder="" className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="bedrooms" component={ErrorInput} />
                                                    </div>
                                                </div>

                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Description </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='textarea'
                                                            name="description"
                                                            id=""
                                                            placeholder="Write about apartments"
                                                            rows="4"
                                                            class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                                            spellcheck="false"
                                                        >
                                                        </Field>
                                                        <ErrorMessage name="description" component={ErrorInput} />
                                                    </div>
                                                </div>

                                                <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Commission Type </label>
                                                    <div className="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field as='select' name='commission_type' class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                                                            <option>Lease</option>
                                                            <option>Rent</option>
                                                        </Field>
                                                        <ErrorMessage name="commission_type" component={ErrorInput} />
                                                    </div>
                                                </div>

                                                <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                                                    <label for="" class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"> Commission </label>
                                                    <div class="mt-2 sm:mt-0 sm:col-span-2">
                                                        <Field type="text" name="commission" id="" placeholder="" class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                        <ErrorMessage name="commission" component={ErrorInput} />
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="mt-6 sm:mt-12">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                                >
                                                    {isSubmitting ? 'Submitting' : 'Submit'}
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>

                            <div className="tab-pane fade" id="tabs-images" role="tabpanel" aria-labelledby="tabs-images-tab">
                                <div class="py-8 bg-white">
                                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                        <div class="max-w-xl mx-auto">
                                            <div class="sm:flex sm:items-center sm:space-x-8">
                                                <label for="" class="block text-sm font-bold text-gray-900"> Upload a file: </label>
                                                <div class="relative mt-2 sm:mt-0 sm:flex-1">
                                                    <input onChange={(e) => {
                                                        createPhoto(e.target.files, 'dd878801-5ebb-4682-933c-b5a0c2bfd660')
                                                    }} type="file" class="block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="py-12 bg-white sm:py-16 lg:py-20">
                                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                        <div>
                                            <h2 class="text-lg font-bold text-gray-900">Your media files</h2>
                                            <p class="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                                        </div>

                                        <div class="grid grid-cols-2 gap-6 mt-8 lg:mt-10 sm:grid-cols-3 lg:grid-cols-4">
                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-01.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Interior_904.png</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">1.04 MB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-02.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Interior_482.jpg</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">2 MB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-03.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Interior_1849.jpg</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">4.1 MB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-04.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Interior_3009.png</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">1.84 MB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-05.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Interior_1565.png</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">587 KB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-06.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Interior_345.png</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">2.91 MB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-07.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Working_Woman.jpg</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">1.24 MB</p>
                                            </div>

                                            <div>
                                                <div class="overflow-hidden rounded-lg cursor-pointer group aspect-w-3 aspect-h-4 md:aspect-w-3 md:aspect-h-2">
                                                    <img class="object-cover w-full h-full transition-all duration-300 group-hover:scale-105" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/2/media-08.png" alt="" />
                                                </div>
                                                <p class="mt-4 text-sm font-bold text-gray-900">Coffee_shop_img.png</p>
                                                <p class="mt-1 text-sm font-medium text-gray-500">3 MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="tabs-documents" role="tabpanel" aria-labelledby="tabs-documents-tab">
                                <div>
                                    <h2 class="text-lg font-bold text-gray-900">Your ducuments files</h2>
                                    <p class="mt-1 text-sm font-medium text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis.</p>
                                </div>
                                <div class="py-8 bg-white">
                                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                        <div class="max-w-xl mx-auto">
                                            <div class="sm:flex sm:items-center sm:space-x-8">
                                                <label for="" class="block text-sm font-bold text-gray-900"> Upload a file: </label>
                                                <div class="relative mt-2 sm:mt-0 sm:flex-1">
                                                    <input type="file" class="block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="py-12 bg-white sm:py-16 lg:py-20">
                                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                                        <div class="max-w-lg mx-auto">
                                            <div>
                                                <h2 class="text-lg font-bold text-gray-900">Latest Payments</h2>
                                            </div>

                                            <ul class="mt-6 space-y-4">
                                                <li class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                                                    <div class="px-5 py-4">
                                                        <div class="flex items-start justify-between">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-female.png" alt="" />
                                                                <div class="ml-3">
                                                                    <p class="text-sm font-medium text-gray-500">Cody Fisher</p>
                                                                    <p class="mt-1 text-sm font-bold text-gray-900">Clarity Landing UI Kit</p>
                                                                </div>
                                                            </div>
                                                            <p class="text-sm font-medium text-right text-gray-900">$49.00</p>
                                                        </div>
                                                    </div>

                                                    <div class="px-5 py-4">
                                                        <div class="flex items-center justify-between">
                                                            <span class="inline-flex items-center text-sm font-medium text-gray-900">
                                                                <div class="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0 mr-2"></div>
                                                                Complete
                                                            </span>

                                                            <p class="text-sm font-medium text-right text-gray-500">2 hours ago</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                                                    <div class="px-5 py-4">
                                                        <div class="flex items-start justify-between">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-male.png" alt="" />
                                                                <div class="ml-3">
                                                                    <p class="text-sm font-medium text-gray-500">Floyd Miles</p>
                                                                    <p class="mt-1 text-sm font-bold text-gray-900">Clarity eCommerce UI Kit</p>
                                                                </div>
                                                            </div>
                                                            <p class="text-sm font-medium text-right text-gray-900">$99.00</p>
                                                        </div>
                                                    </div>

                                                    <div class="px-5 py-4">
                                                        <div class="flex items-center justify-between">
                                                            <span class="inline-flex items-center text-sm font-medium text-gray-900">
                                                                <div class="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 mr-2"></div>
                                                                Pending
                                                            </span>

                                                            <p class="text-sm font-medium text-right text-gray-500">3 hours ago</p>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="bg-white border border-gray-200 divide-y divide-gray-200 rounded-xl">
                                                    <div class="px-5 py-4">
                                                        <div class="flex items-start justify-between">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover rounded-full w-9 h-9" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-grid/1/avatar-male-2.png" alt="" />
                                                                <div class="ml-3">
                                                                    <p class="text-sm font-medium text-gray-500">Savannah Nguyen</p>
                                                                    <p class="mt-1 text-sm font-bold text-gray-900">Clarity Landing UI Kit</p>
                                                                </div>
                                                            </div>
                                                            <p class="text-sm font-medium text-right text-gray-900">$49.00</p>
                                                        </div>
                                                    </div>

                                                    <div class="px-5 py-4">
                                                        <div class="flex items-center justify-between">
                                                            <span class="inline-flex items-center text-sm font-medium text-gray-900">
                                                                <div class="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0 mr-2"></div>
                                                                Complete
                                                            </span>

                                                            <p class="text-sm font-medium text-right text-gray-500">5 days ago</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="tabs-tenants" role="tabpanel" aria-labelledby="tabs-tenants-tab">
                                <Link to={`/company/tenants`} >Add a Tenant</Link>
                                <div class="flex flex-col mt-4 lg:mt-8">
                                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <table class="min-w-full lg:divide-gray-200 lg:divide-y">
                                                <thead class="hidden lg:table-header-group">
                                                    <tr>
                                                        <th class="py-3.5 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-widest">Customer</th>

                                                        <th class="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Email Address</th>

                                                        <th class="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Phone Number</th>

                                                        <th class="py-3.5 px-4 text-left hidden xl:table-cell text-xs uppercase tracking-widest font-medium text-gray-500">Join Date</th>

                                                        <th class="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium text-gray-500">Country</th>

                                                        <th class="relative py-3.5 pl-4 pr-4 md:pr-0">
                                                            <span class="sr-only"> Actions </span>
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr class="bg-white">
                                                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-female.png" alt="" />
                                                                Darrell Steward
                                                            </div>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        />
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    November 9, 2021
                                                                </div>

                                                                <div class="flex items-center pt-3 space-x-4">
                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Edit Details
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                        </svg>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                November 9, 2021
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">USA</td>

                                                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Edit Details
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr class="bg-gray-50">
                                                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-female-2.png" alt="" />
                                                                Ronald Richards
                                                            </div>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        />
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    November 9, 2021
                                                                </div>

                                                                <div class="flex items-center pt-3 space-x-4">
                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Edit Details
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                        </svg>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                November 9, 2021
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">USA</td>

                                                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Edit Details
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr class="bg-white">
                                                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-male.png" alt="" />
                                                                Jane Cooper
                                                            </div>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        />
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    November 9, 2021
                                                                </div>

                                                                <div class="flex items-center pt-3 space-x-4">
                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Edit Details
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                        </svg>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                November 9, 2021
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">USA</td>

                                                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Edit Details
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr class="bg-gray-50">
                                                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-female-3.png" alt="" />
                                                                Jacob Jones
                                                            </div>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        />
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    November 9, 2021
                                                                </div>

                                                                <div class="flex items-center pt-3 space-x-4">
                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Edit Details
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                        </svg>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                November 9, 2021
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">USA</td>

                                                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Edit Details
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr class="bg-white">
                                                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-male-2.png" alt="" />
                                                                Marvin McKinney
                                                            </div>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        />
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    November 9, 2021
                                                                </div>

                                                                <div class="flex items-center pt-3 space-x-4">
                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Edit Details
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                        </svg>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                November 9, 2021
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">USA</td>

                                                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Edit Details
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr class="bg-gray-50">
                                                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <img class="flex-shrink-0 object-cover w-8 h-8 mr-3 rounded-full" src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-list/2/avatar-male-3.png" alt="" />
                                                                Darlene Robertson
                                                            </div>
                                                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    tim.jennings@example.com
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path
                                                                            stroke-linecap="round"
                                                                            stroke-linejoin="round"
                                                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                        />
                                                                    </svg>
                                                                    (480) 555-0103
                                                                </div>

                                                                <div class="flex items-center">
                                                                    <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                    </svg>
                                                                    November 9, 2021
                                                                </div>

                                                                <div class="flex items-center pt-3 space-x-4">
                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        Edit Details
                                                                    </button>

                                                                    <button
                                                                        type="button"
                                                                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                    >
                                                                        <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                        </svg>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                </svg>
                                                                tim.jennings@example.com
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                                    />
                                                                </svg>
                                                                (480) 555-0103
                                                            </div>
                                                        </td>

                                                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap">
                                                            <div class="flex items-center">
                                                                <svg class="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                                November 9, 2021
                                                            </div>
                                                        </td>

                                                        <td class="px-4 py-4 text-sm font-medium text-right text-gray-900 align-top lg:align-middle lg:text-left whitespace-nowrap">USA</td>

                                                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                                                            <div class="flex items-center space-x-4">
                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    Edit Details
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                >
                                                                    <svg class="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div class="py-6 bg-white">
                                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                        <nav class="relative flex justify-center -space-x-px rounded-md">
                                            <a href="#" title="" class="relative inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 w-9 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10">
                                                <span class="sr-only"> Previous </span>
                                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </a>

                                            <a href="#" title="" class="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 1 </a>

                                            <a href="#" title="" aria-current="page" class="relative z-10 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 2 </a>

                                            <a href="#" title="" class="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 3 </a>

                                            <a href="#" title="" class="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 4 </a>

                                            <a href="#" title="" class="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 5 </a>

                                            <a href="#" title="" class="relative inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9 rounded-r-md">
                                                <span class="sr-only"> Next </span>
                                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </nav>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    userInfo: selectCurrentUserProfile
});

const mapDispatchToProps = (dispatch) => {
    return {
        createProperty: (property) => dispatch(createProperty(property)),
        createApartment: (apartment) => dispatch(createApartment(apartment)),
        createPhoto: (photo, propertyId) => dispatch(createPhoto(photo, propertyId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostProperty);