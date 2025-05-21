import Header from '@/components/Header'; 
import About from '@/components/about'; 
import Body from '@/components/body'; 
import Modules from '@/components/modules';




export default function Home() {
  return (
  
    <div style={{color: 'darkblue', alignItems: 'center', }}>

      <Header />
      <About /> 
      <Body />
      <Modules />
     
    </div>
    
    );
}