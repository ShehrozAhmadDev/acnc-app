import React, {FC, useState} from 'react';
import {View, Image, ViewStyle, Touchable, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import BurgerImage from '../../../../assets/Borgir-RM.png';
import AddIcon from '../../../../assets/components/AddIcon';
import {IconButton} from '../../../../components/ui/iconbutton';
import {Text} from '../../../../components/ui/text';
import {BottomSheet} from '../../../../components/ui/bottomsheet';
import {Button} from '../../../../components/ui/button';
import { IMenu } from '../../../../types';
import { useDispatch } from 'react-redux';
import { setSelectedCartItem } from '../../../../redux/features/cart-slice';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  item: IMenu;
  style?: ViewStyle;
  setOpenCartModal: (item: boolean) => void;
}

const ItemCard:FC<Props> = ({item, style, setOpenCartModal}) => {
  const dispatch = useDispatch();
  const [isVisble, setIsVisible] = useState(false);

  return (
    <TouchableOpacity style={{...styles.mainContainer, ...style}} onPress={()=>setIsVisible(true)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} alt="Burger Image" />
      </View>
      <Text style={styles.mainText}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price} pkr</Text>
        <Icon name="cart-plus" size={20} color={"#800000"}  onPress={()=>{
             const cartItem = { item: item, quantity: 1, addOns: [] };
             dispatch(setSelectedCartItem(cartItem));
             setOpenCartModal(true);
        }} />
      </View>
      <BottomSheet isVisible={isVisble} onClose={() => setIsVisible(false)}>
        <View style={styles.bottomSheetContainer}>
          <Image style={[styles.bottomImage]} source={{ uri: item.imageUrl }} />
          <View style={styles.bottomSheetTextCont}>
            <Text style={styles.bottomSheetmainText}>
             {item.description}
            </Text>
            <Button title="Add to Cart"  onPress={()=>{ 
              const cartItem = { item: item, quantity: 1, addOns: [] };
                  dispatch(setSelectedCartItem(cartItem));
                  setOpenCartModal(true);
                  }} />
          </View>
        </View>
      </BottomSheet>
    </TouchableOpacity>
  );
};

export default ItemCard;
