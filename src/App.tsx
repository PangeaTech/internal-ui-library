import { StyledEngineProvider } from '@mui/material/styles';
import PageLoader from './components/Modals/PageLoader/PageLoader';

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <PageLoader />
      </StyledEngineProvider>
    </>
  );
}

export default App;
