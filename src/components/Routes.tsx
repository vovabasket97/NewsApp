import { commonNavigationType } from '@configs/routes'
import withMainProvider from '@providers/MainProvider'
import { createStackNavigator } from '@react-navigation/stack'
import AddPost from '@screens/AddPost/AddPost'
import Home from '@screens/Home/Home'

const Stack = createStackNavigator<commonNavigationType>()

const HomeComponent = withMainProvider({ WrappedComponent: Home, useScrollView: false, useContainer: false })
const AddPostCompoment = withMainProvider({ WrappedComponent: AddPost })

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeComponent} />
    <Stack.Screen name="AddPost" component={AddPostCompoment} />
  </Stack.Navigator>
)

export default Routes
