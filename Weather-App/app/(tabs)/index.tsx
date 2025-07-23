import { Text, Image, View, TouchableOpacity, StyleSheet, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useWeatherByLocation } from '@/hooks/useWeatherByLocation';

import search from '@/assets/images/search.png';

const Index = () => {
    const { weather, city, loading } = useWeatherByLocation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
                <Text style={styles.text}>
                    {loading ? 'Loading...' : city || 'Unknown City'}
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Search City'}
                        onChangeText={text => console.log(text)}
                    />
                    <TouchableOpacity onPress={() => console.log('Image pressed')}>
                        <Image source={search} style={styles.searchIcon} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

export default Index;

const styles = StyleSheet.create({
    container: {
        borderStyle: 'solid',
        borderRadius: 12,
        backdropFilter: 'blur(10px)',
        paddingTop: 50,
        width: 390,
        height: 844,
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.15)',
        borderRadius: 20,
        margin: 15,
        paddingHorizontal: 10,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    textInput: {
        flex: 1,
        color: 'white',
        height: 40,
        padding: 10,
        borderWidth: 0,
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginLeft: 8,
        color: 'black',
    },
});