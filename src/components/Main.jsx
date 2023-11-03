import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        marginTop: theme.margins.welcomeText,
        marginLeft: theme.margins.welcomeText,
        color: theme.colors.primary,
    },
})

const Main = () => {
  return (
    <Text style={styles.text}>News engine</Text>
  )
}

export default Main