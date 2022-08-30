export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/pokemons/${id}`)
}

export const goToPokedexPage = (navigate) => {
    navigate('/pokedex')
}

export const goBack = (navigate) => {
    navigate(-1)
}