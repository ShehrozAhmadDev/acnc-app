import {Alert, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {ISignupProps} from './SignupType';
import {Text} from '../../../../components/ui/text';
import {Input} from '../../../../components/ui/input';
import {Button} from '../../../../components/ui/button';
import {styles} from './styles';
import {handleUserRegister} from '../../../../services/auth/signup';

const Signup: FC<ISignupProps> = ({navigation}) => {
  const [isVisble, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleEmailChange = (value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
      setEmail(value);
      setErrorMessage('');
      return;
    }
    setEmail(value);

    if (!emailRegex.test(value)) {
      setErrorMessage('Invalid email format');
    } else {
      setErrorMessage('');
    }
  };

  const handleSignupUser = async () => {
    if (
      !errorMessage &&
      email &&
      !passwordErrorMessage &&
      password === confirmPassword
    ) {
      try {
        const data = await handleUserRegister(email, password);
        if (data.status === 200) {
          Alert.alert('User Signed up Successfully');

          setIsVisible(true);
        } else {
          Alert.alert('Invalid Information');
        }
      } catch (error) {
        Alert.alert('Invalid Information');
      }
    }
  };

  const handlePasswordChange = (value: any) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (value === '') {
      setPassword(value);
      setPasswordErrorMessage('');
      return;
    }
    setPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordErrorMessage('Invalid password format');
    } else {
      setPasswordErrorMessage('');
    }
  };

  const handleConfirmPasswordChange = (value: any) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (value === '') {
      setConfirmPassword(value);
      setPasswordErrorMessage('');
      return;
    }
    setConfirmPassword(value);
    if (!passwordRegex.test(value)) {
      setPasswordErrorMessage('Invalid password format');
    } else {
      setPasswordErrorMessage('');
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Sign up</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder={'Email or Phone Number'}
            value={email}
            onChange={handleEmailChange}
            errorMessage={errorMessage}
            multiline={false}
          />
          <Input
            placeholder={'Password'}
            value={password}
            onChange={handlePasswordChange}
            multiline={false}
          />
          <Input
            placeholder={'Confirm Password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorMessage={passwordErrorMessage}
            multiline={false}
          />
        </View>
        <Button
          title="Sign up"
          style={styles.loginButton}
          onPress={() => {
            handleSignupUser();
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomMainText}>
          By logging, you agree to our{'\n'}
          <Text style={styles.highlightedText}>
            Terms & Conditions
          </Text> and{' '}
          <Text style={styles.highlightedText}>Privacy Policy{'.'}</Text>
        </Text>
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={styles.signupButton}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
