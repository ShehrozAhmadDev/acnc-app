import {Alert, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {InputWithIcon} from '../../../../components/ui/inputWithIcon';
import {getMenuItems} from '../../../../services/menu/getMenuItems';
import {IMenu, IMenuItem} from '../../../../types';
import { useAppSelector } from '../../../../redux/store';
import ItemCard from '../../../../components/base/home/itemCard/ItemCard';
import { useDispatch } from 'react-redux';
import { setMenu, setProductsByCategory } from '../../../../redux/features/menu-slice';
import AddToCartModal from '../../../../components/modals/addToCartModal/AddToCartModal';
import { getAddons } from '../../../../services/addon/getAddons';
import { setAddon } from '../../../../redux/features/addon-slice';
import ImageSwiper from '../../../../components/base/imageSwiper/ImageSwiper';
import Logo from '../../../../assets/acnclogo.png';
import Banner from '../../../../services/banner/Banner';

const Home = () => {
  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { user } = useAppSelector((state) => state.userReducer.value);
  const { menu, categories, filteredMenu } = useAppSelector((state) => state.menuReducer.value);
  const [openCartModal, setOpenCartModal] = useState(false);

  console.log("HEREEE")
  const [banners, setBanners] = useState([]);
  const getAllBannerItems = async () => {
    console.log("HEREEE")
    try {
      if(user?.token){
      const data = await Banner.getAllBannerItems(user?.token);
      console.log(data)
      if (data?.status === 200) {
        setBanners(data.banner);
      }
    }
    } catch (error) {
      console.log(error);
    }
  };
 


  const handleTitlePress = (item: string) => {
    setSelectedCategory(item);
  };

  const getAllMenuItems = async () => {
    try {
      if (user?.token) {
        const response = await getMenuItems(user.token);
        if (response.status === 200) dispatch(setMenu(response.menu));
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error Occured")
    }
  };
  const getAllAddonItems = async () => {
    try {
      if (user?.token) {

      const data = await getAddons(user.token);
      if (data.status === 200) {
        dispatch(setAddon(data.addon));
      }
    }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMenuItems();
    getAllAddonItems();    getAllBannerItems();

  }, []);

  useEffect(() => {
    dispatch(setProductsByCategory(selectedCategory));
  }, [selectedCategory]);

  return (
    <ScrollView style={styles.mainContainer} contentContainerStyle={{ paddingBottom: 140 }}>
      <View style={styles.imageLogoContainer}>
        <Image source={Logo} style={styles.logoStyle} resizeMode="cover" />
        <Text style={styles.mainHeader} numberOfLines={2}>
          ACNC Kitchen
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <ImageSwiper/>
      </View>
      <View style={styles.categoryHeaderContainer}>
        <Text style={styles.categoryHeader}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.categoryViewAll} onPress={()=>{setSelectedCategory("")}}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 16 }}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleTitlePress(item)}
            style={[
              styles.categoriesCard,
              {
                backgroundColor:
                  selectedCategory === item ? '#5e0701' : '#242323',
                marginLeft: index ? 0 : 20,
                marginRight: index === categories.length - 1 ? 20 : 8,
              },
            ]}>
            <Text
              style={{
                fontSize: 13,
                color: selectedCategory === item ? 'white' : '#9B9B9B',
                fontFamily: 'Poppins-Medium',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
        {filteredMenu &&
          filteredMenu.map((item, index) => (
            <ItemCard item={item} key={index} setOpenCartModal={setOpenCartModal} />
          ))}
      </View>
      <AddToCartModal isOpen={openCartModal} closeModal={()=>{ setOpenCartModal(false)}}  />
    </ScrollView>
  );
};

export default Home;
