import { requestCreateApartments, requestCreateProperties, requestUploadPhoto } from "../../api/property.requests"


export const createProperty = (property) => {
    return async dispatch => {
        try {
            const { data } = await requestCreateProperties(property);

            return data
        } catch (error) {
            // @todo handle error
        }
    }
}

export const createApartment = apartment => {
    return async dispatch => {
        try {
            const { data } = await requestCreateApartments(apartment);

            return data
        } catch (error) {
            // @todo handle error
        }
    }
}

export const createPhoto = (photo, propertyId) => {
    return async dispatch => {
        try {
            const { data } = await requestUploadPhoto(photo, propertyId)
        } catch (error) {
            // @todo handle error
        }
    }
}