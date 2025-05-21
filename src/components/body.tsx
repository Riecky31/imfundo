import GradeDisplay from "@/components/body/gradeDisplay"



export default function Body(){
  return (
      <div className="grid grid-cols-5 sm:grid-col s-5 border border-gray-300">
        <GradeDisplay
          name="grade 9"
          description="Start of high school"
          teacher="Masego"
        />
        <GradeDisplay name="grade 8" description="this is grade 9" />
        <GradeDisplay name="grade 10" description="Start of real learning" />
        <GradeDisplay name="grade 11" description="this is grade 11" />
        <GradeDisplay name="grade 12" description="Exit Grade" />
      </div>

  );
}