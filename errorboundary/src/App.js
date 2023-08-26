
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import Home from './Home';
import Error from './Error';
import UseEffect from './UseEffect';
import Custom from './Custom';



function App() {
  return (
   <>
   {/* <ErrorBoundary FallbackComponent={Error}>
<Home/>
</ErrorBoundary> */}
{/* <UseEffect/> */}
<Custom/>
   </>
  );
}
//  const Error=({error,resetErrorBoundary})=>{
//    return(
//     <>
//     <h1>{error.message}</h1>
//      <h1>something went wrong</h1>
//      <button onClick={resetErrorBoundary}>Try again</button>
//      </>
//    )
//  }

export default App;
