export const url = "https://tager.dev.ozitag.com/"

type LoginResponseType = {
    tokenType: string
    expiresAt: string
    accessToken: string
    refreshToken: string
    scopes: Array<any>
}

type AuthResponseType = {
    name: string
    email: string
}

export function login(email: string, password: string) {
    return fetch(url + "api/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({clientId: 1, email, password})
    })
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then(text => {
                        throw new Error(text)
                    })
            } else {
                return response.json()
            }
        })
        .then(data => {
            return data.data as LoginResponseType
        })
        .catch(error => {
            let err = JSON.parse(error.message)
            throw new Error(err.message)
        })
}

export function logout() {
    return fetch("https://secret-ocean-49799.herokuapp.com/" + url + "user/profile/logout", { //for cors
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({})
    })
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then(text => {
                        throw new Error(text)
                    })
            } else {
                let res = JSON.stringify(response)
                return JSON.parse(res)
            }
        })
        .then(data => {
            return data.data
        })
        .catch(error => {
            let err = JSON.parse(error.message)
            return err.message
        })
}

export function authMe(token: string | null) {
    return fetch(url + "api/tager/user/profile", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => {
            if (!response.ok) {
                return response.text()
                    .then(text => {
                        throw new Error(text)
                    })
            } else {
                return response.json()
            }
        })
        .then(data => {
            return data.data as AuthResponseType
        })
        .catch(error => {
            let err = JSON.parse(error.message)
            return err.message
        })
}

