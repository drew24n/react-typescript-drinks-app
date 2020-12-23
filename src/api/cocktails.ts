import axios from "axios";
import {drinkItem, drinksResponse} from "../interfaces/cocktails";

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/'
})

export const cocktails = {
    searchByName(name: string) {
        return instance.get<drinksResponse>('search.php', {params: {s: name}})
            .then(res => res.data.drinks.map((drinkItem: drinkItem) => {
                return {
                    idDrink: drinkItem.idDrink,
                    strDrink: drinkItem.strDrink,
                    strDrinkThumb: drinkItem.strDrinkThumb,
                    strAlcoholic: drinkItem.strAlcoholic
                }
            }))
            .catch(error => alert(error))
    },
    filterIsAlcoholic(isAlcoholic: boolean) {
        return instance.get<drinksResponse>('filter.php', {params: {a: isAlcoholic ? 'Alcoholic' : 'Non_Alcoholic'}})
            .then(res => res.data.drinks)
            .catch(error => alert(error))
    },
    getDetails(id: string) {
        return instance.get<drinksResponse>('lookup.php', {params: {i: id}})
            .then(res => res.data.drinks.map((drinkItem: drinkItem) => {
                return {
                    idDrink: drinkItem.idDrink,
                    strDrink: drinkItem.strDrink,
                    strDrinkThumb: drinkItem.strDrinkThumb,
                    strAlcoholic: drinkItem.strAlcoholic,
                    strInstructions: drinkItem.strInstructions
                }
            }))
            .catch(error => alert(error))
    }
}