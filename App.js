import * as React from 'react';
import NavigationMain from './src/components/navigation/NavigationMain';
function Main() {
  useEffect(() => {
    loadFonts();
  }, []);
}
function App() {
    return(
        <NavigationMain/>
    );
}

export default App;