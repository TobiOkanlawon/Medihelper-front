import gql from 'graphql-tag'

export const CREATE_DOCTOR = gql`
    mutation CreateDoctor($firstName: String!, $lastName: String!, $email: String!, $password: String!){
        createDoctor(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
            token
            user {
                firstName
                lastName
            }
        }
    }

`

export const CREATE_RECEPTIONIST = gql`
    mutation CreateReceptionist($firstName: String!, $lastName: String!, $email: String!, $password: String!){
        createReceptionist(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
            token
            user {
                firstName
                lastName
            }
        }
    }

`

export const CREATE_PHARMACIST = gql`
    mutation CreatePharmacist($firstName: String!, $lastName: String!, $email: String!, $password: String!){
        createPharmacist(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
            token
            user {
                firstName
                lastName
                email
            }
        }
    }

`

export const CREATE_STUDENT = gql`
    mutation CreateStudent($firstName: String!, $lastName: String!, $clinicID: String!, $password: String!){
        createStudent(firstName: $firstName, lastName: $lastName, clinicID: $clinicID, password: $password){
            token
            user {
                firstName
                lastName
                clinicID
            }
        }
    }
`

export const CREATE_APPOINTMENT = gql`
    mutation CreateAppointment($studentClinicID: String!){
        createAppointment(studentClinicID: $studentClinicID){
            student
        }       
    }
`

export const GET_DRUG_LIST = gql