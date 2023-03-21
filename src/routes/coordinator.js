export const goToFeedPage = (navigate) =>{
    navigate("/feed")
}

export const goToSignupPage = (navigate) =>{
    navigate("/signup")
}

export const goToLoginPage = (navigate) => {
    navigate("/")
}

export const goToDetailsPage = (navigate, post) =>{
    navigate(`/detailspage/${post}`)
}