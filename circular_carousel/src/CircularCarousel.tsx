import { FlatList, ImageProps, View } from 'react-native';
import { CircularCarouselListItem } from './listItem';

type CircularCarouselProps = { data: ImageProps['source'][] };

const CircularCarousel: React.FC<CircularCarouselProps> = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(_, index) => index.toString()}
            style={{
                position: 'absolute',
                bottom: 0,
                height: 300,
            }}
            contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
            horizontal
            renderItem={({ item, index }) => {
                return (
                    <CircularCarouselListItem imageSrc={item} index={index} />
                );
            }}
        />
    );
};

export { CircularCarousel };
