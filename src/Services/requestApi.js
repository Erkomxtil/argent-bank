export async function postForm(userName, password) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userName,
      password: password,
    }),
  })

  const data = await response.json()

  return data
}

export async function getUser(token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({}),
  })

  const data = await response.json()

  return data.body
}

export async function changeUserProfil(token, firstName, lastName) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
  })

  const data = await response.json()

  return data.body
}
