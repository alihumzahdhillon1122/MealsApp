import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'
function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color: '#ccc'}}
        style={({ pressed }) =>
            [styles.button,
            pressed ? styles.buttonPressed : null]}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detilItem}>{duration}m</Text>
                    <Text style={styles.detilItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detilItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>

    </View>

}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,

    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'

    },
    detilItem: {
        marginHorizontal: 4,
        fontSize: 12,

    }
});