import Header from '@/components/Header'; 
import About from '@/components/about'; 
import Body from '@/components/body'; 
import { listSubject } from '@/components/Data/subject';
import { StudentA } from '@/components/Data/students';
import { gradeList } from '@/components/Data/grades';




export default function Home() {
  return (
    <div>
    <div style={{color: 'darkblue', alignItems: 'center', }}>

      <Header />
      <About /> 
      <Body />

    </div>

   <div className="grid grid-cols-5 sm:grid-col s-5 border border-gray-300">
    { listSubject.map(function (subject){
          return(<p>{subject.title},<br/>{subject.teacher} </p>

          )
          
         }) }

    </div>
<br/>
    <div>
    { StudentA.map(function (students){
          return <p>{students.firstName} </p>
         }) }
    </div>
    <br />
    <div>
    { gradeList.map(function (grade){
          return <p>{grade.title} <br />{grade.classTeacher} </p>
         }) }
    </div>
   </div>

    
    );
}