export const url = "https://tager.dev.ozitag.com/"

type LoginResponseType = {
    data: {
        tokenType: string
        expiresAt: string
        accessToken: string
        refreshToken: string
        scopes: Array<any>
    }
}

type AuthResponseType = {
    data: {
        name: string
        email: string
    }
}

export function login(id: number, email: string, login: string) {
    return fetch(url + "api/auth/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({id, email, login})
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

export function authMe(token: string) {
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

