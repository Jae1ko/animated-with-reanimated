import { FlatList, ImageProps, View } from 'react-native';
import { CircularCarouselListItem, ListItemWidth } from './listItem';
import { useSharedValue } from 'react-native-reanimated';

type CircularCarouselProps = { data: ImageProps['source'][] };

const CircularCarousel: React.FC<CircularCarouselProps> = ({ data }) => {
    const contentOffset = useSharedValue(0);

    return (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            scrollEventThrottle={16}
            onScroll={event => {
                contentOffset.value = event.nativeEvent.contentOffset.x;
                // console.log(event.nativeEvent.contentOffset.x);
            }}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={ListItemWidth}
            style={{
                position: 'absolute',
                bottom: 0,
                height: 300,
            }}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingRight: 3 * ListItemWidth,
            }}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <CircularCarouselListItem
                        contentOffset={contentOffset}
                        imageSrc={item}
                        index={index}
                    />
                );
            }}
        />
    );
};

export { CircularCarousel };
