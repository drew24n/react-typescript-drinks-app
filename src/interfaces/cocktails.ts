export interface drinkItem {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
    strAlcoholic?: string
    strInstructions?: string
}

export interface drinksResponse {
    drinks: Array<drinkItem>
}
