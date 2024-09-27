import { Text, View, StyleSheet } from 'react-native'
import MealsList from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';
import { MEALS } from '../data/dummy-data';




function FavoriteScreeen() {
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    // const mealsFavourite = favoriteMealIds.includes(mealId)
    const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}> You have no favorite meals yet. </Text>
            </View>
        )
    }

    return (
        <MealsList items={favoriteMeals} />

    )
}


export default FavoriteScreeen;



const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'

    }
});