import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CircularCarousel } from './src/CircularCarousel';

const data = [
    require('./src/assets/images/00.jpg'),
    require('./src/assets/images/01.jpg'),
    require('./src/assets/images/02.jpg'),
    require('./src/assets/images/03.jpg'),
    require('./src/assets/images/04.jpg'),
    require('./src/assets/images/05.jpg'),
    require('./src/assets/images/06.jpg'),
    require('./src/assets/images/07.jpg'),
    require('./src/assets/images/08.jpg'),
    require('./src/assets/images/09.jpg'),
];

function App() {
    return (
        <View style={styles.container}>
            <CircularCarousel data={data} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
});

export default App;
