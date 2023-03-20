export const goToFeedPage = (navigate) =>{
    navigate("/feed")
}

export const goToSignupPage = (navigate) =>{
    navigate("/signup")
}

export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToFeedComments = (navigate, id) =>{ navigate(`/feed/${id}`)
}