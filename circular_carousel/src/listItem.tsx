import { ImageProps, View, Dimensions, Image } from 'react-native';

type CircularCarouselListItemProps = {
    imageSrc: ImageProps['source'];
    index: number;
};

const { width: windowWidth } = Dimensions.get('window');

const ListItemWidth = windowWidth / 4;

const CircularCarouselListItem: React.FC<CircularCarouselListItemProps> = ({
    imageSrc,
    index,
}) => {
    return (
        <View
            style={{
                width: ListItemWidth,
                aspectRatio: 1,
            }}
        >
            <View
            // style={{ flex: 1, backgroundColor: 'red', borderRadius: 100 }}
            />
            <Image
                source={imageSrc}
                style={{
                    flex: 1,
                    // width: ListItemWidth,
                    // height: ListItemWidth,
                    margin: 5,
                    // borderWidth: 1,
                    // marginRight: 5,
                    // margin: 5,
                    borderRadius: 200,
                }}
            />
        </View>
    );
};

export { CircularCarouselListItem };
