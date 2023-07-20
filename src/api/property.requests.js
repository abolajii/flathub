import { FlatHub } from "."

export const requestCreateProperties = async (property) => {
    return await FlatHub.post('/property/add', property)
}

export const requestCreateApartments = async (apartment) => {
    return await FlatHub.post('/property/unit/add', apartment)
}

export const requestUploadPhoto = async (photo, propertyId) => {
    return await FlatHub.post(`/property/unit/photo/${propertyId}`, { photo })
}