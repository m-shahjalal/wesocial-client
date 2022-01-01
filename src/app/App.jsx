import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';
import Routers from './Routers';

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Routers />
		</ChakraProvider>
	);
};

export default App;
