import { Route,Routes, BrowserRouter} from 'react-router-dom'
import Image from '../Image';
import TextToText from '../TextToText';
import Layout from '../../layout';




const Router = () => {
  return(
    <BrowserRouter>
    
    
   
    <Routes>
    <Route path="/" element={<Layout/>}/>
          <Route path="/text" element={<TextToText/>}/>
          <Route path="/image" element={<Image/>}/>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router;