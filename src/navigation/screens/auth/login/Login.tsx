import {Alert, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {ILoginProps} from './LoginType';
import {Text} from '../../../../components/ui/text';
import {Input} from '../../../../components/ui/input';
import {Button} from '../../../../components/ui/button';
import {styles} from './styles';
import {BottomSheet} from '../../../../components/ui/bottomsheet';
import useAuth from '../../../../hooks/useAuth';
import {handleUserLogin} from '../../../../services/auth/login';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../redux/features/user-slice';

const Login: FC<ILoginProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [isVisble, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorText, setErroText] = useState('');

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const {login} = useAuth();

  const handleEmailChange = (value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value === '') {
      setEmail(value);
      setErrorMessage('');
      return;
    }
    setEmail(value);

    if (!emailRegex.test(value)) {
      setErrorMessage('Invalid email  format');
    } else {
      setErrorMessage('');
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

  const handleLogin = async () => {
    try {
      const data = await handleUserLogin(email, password);
      if (data.status === 200) {
        console.log(data)
        dispatch(
          setUser({
            _id: data?.user._id,
            fullName: data?.user.fullName,
            email: data?.user.email,
            token: data?.token
          })
        );
        // login(data.email, data.token);

        setIsVisible(true);
      } else {
        setErroText("In else")
        Alert.alert('Invalid Information');
        console.log('Invalid Information');
      }
    } catch (error) {
      // setErroText(JSON.stringify(error))
      Alert.alert(JSON.stringify(error.message))
    }
  };

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 7000);
  }, [isVisble]);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome Back</Text>
        <Text style={styles.subText}>
          We're excited to have you back, can't wait to see what you've been up
          to since you last logged in.
        </Text>
      </View>
      <Text style={styles.loginText}>Login Here</Text>

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
            errorMessage={passwordErrorMessage}
            multiline={false}
          />
        </View>
        <Button
          title="Login"
          style={styles.loginButton}
          onPress={() => {
            handleLogin();
          }}
        />
        <Text>{errorText}</Text>
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
          <TouchableOpacity onPress={navigateToSignup}>
            <Text style={styles.signupButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
     
    </ScrollView>
  );
};

export default Login;
