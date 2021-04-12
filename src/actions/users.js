export const RECIEVE_USERS = 'RECIEVE_USERS'

export function getUsers (users) {
    return {
        type: RECIEVE_USERS,
        users
    }
}
