import { useLayoutEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import IconButton from '../components/IconButton';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { MEALS } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite} from '../store/redux/favorites'

function MealDetailScreen({ route, navigation }) {

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();


    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const mealsFavourite = favoriteMealIds.includes(mealId)
    function changeFavoriteStatusHandler (){
        if(mealsFavourite){
            dispatch(removeFavorite({id : mealId}))
        }else {
            dispatch(addFavorite({id : mealId}))
        }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={{ marginRight: 10 }}>

                        <IconButton
                            icon={mealsFavourite ? 'star' : 'star-outline'}
                            color="white"
                            onWhenPress={changeFavoriteStatusHandler}

                        />
                    </View>
                )
            }
        });

    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{ uri: selectedMeal.imageUrl }}
                style={styles.Image}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detilText}
            />
            <View style={styles.listOutterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>

        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    Image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',

    },
    detilText: {
        color: 'white'
    },
    listOutterContainer: {

        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }

});



