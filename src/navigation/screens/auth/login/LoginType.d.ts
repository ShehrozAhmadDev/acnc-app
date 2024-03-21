import {StackNavigationProp} from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/AuthStackParamsList';

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export interface ILoginProps {
  navigation: LoginScreenNavigationProp;
}
