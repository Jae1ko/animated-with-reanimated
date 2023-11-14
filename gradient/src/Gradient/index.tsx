import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    useWindowDimensions,
} from 'react-native';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import {
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { getRandomColor } from './utils';

function Gradient() {
    const { height, width } = useWindowDimensions();
    const leftColor = useSharedValue('red');
    const rightColor = useSharedValue('blue');

    const color = useDerivedValue(() => {
        return [leftColor.value, rightColor.value];
    }, []);

    return (
        <>
            <Canvas style={{ flex: 1 }}>
                <Rect x={0} y={0} width={width} height={height}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, height)}
                        colors={color}
                    />
                </Rect>
            </Canvas>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => {
                    leftColor.value = withTiming(getRandomColor());
                    rightColor.value = withTiming(getRandomColor());
                }}
            >
                <Text style={styles.textColor}>{'<>'}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 52,
        right: 32,
        height: 54,
        aspectRatio: 1,
        borderRadius: 40,
        backgroundColor: '#111',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textColor: {
        color: '#FFFFFF',
    },
});

export default Gradient;
