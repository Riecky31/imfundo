import Header from '@/components/Header'; 
import About from '@/components/about'; 
import Body from '@/components/body'; 
import { listSubject } from '@/components/Data/subject';




export default function Home() {
  return (
    <div>
    <div style={{color: 'darkblue', alignItems: 'center', }}>

      <Header />
      <About /> 
      <Body />

    </div>
    <div className="border border-black-300 p-4">
    { listSubject.map(function (subject){
          return <p>{subject.title} </p>
         }) }
  </div>
   </div>

    
    );
}