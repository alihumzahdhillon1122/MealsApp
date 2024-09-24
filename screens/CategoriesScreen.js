import { FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTiles';

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId : itemData.item.id
            });
        }
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onWhenPress={pressHandler} />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}



export default CategoriesScreen;


const styles = StyleSheet.create({
    container: {

    },
});