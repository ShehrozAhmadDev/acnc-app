import {StackNavigationProp} from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/AuthStackParamsList';

type WelcomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

export interface IWelcomeProps {
  navigation: WelcomeScreenNavigationProp;
}
