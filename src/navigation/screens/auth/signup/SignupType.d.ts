import {StackNavigationProp} from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../../types/AuthStackParamsList';

type SignupScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Signup'
>;

export interface ISignupProps {
  navigation: SignupScreenNavigationProp;
}
