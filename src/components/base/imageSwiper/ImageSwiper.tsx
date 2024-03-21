import React  from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Deal from '../../../assets/deal.jpg'
import Deal1 from '../../../assets/deal1.jpg';
import Deal2 from '../../../assets/deal2.jpg';



export default function ImageSwiper() {
  const images = [Deal, Deal1, Deal2];
    return (
      <View style={styles.container}>
      <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={images}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Image source={item} style={styles.image} />
      </View>
      )}
    />
      </View>

    )
  }

  
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  container: { height: 200, width: "100%", marginVertical: 10},
  child: { width, justifyContent: 'center' },
  image:{objectFit:"cover", height: 200, width: "100%" }
})