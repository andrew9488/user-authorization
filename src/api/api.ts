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

export function login(id: number, email: string, password: string) {
    return fetch(url + "api/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({clientId: id, email, password})
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            return data.data as LoginResponseType
        })
}

export function authMe(token: string | null) {
    return fetch(url + "api/tager/user/profile", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
        .then(data => {
            return data.data as AuthResponseType
        })
}

