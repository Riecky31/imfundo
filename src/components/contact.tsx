export default function Contact(){
    return(
        
        <form>
            <h1 className="text-3xl font-bold mb-4">To contact us populate the form below  </h1>
            <li><label>Enter your name:
                    <input type="text" />
                </label></li> 

            <li><label>Enter your Contact:
                <input type="int" />
                </label></li> 

            <li><label>Enter your Email:
                <input type="text" />
            </label></li> 
         </form>
    );
}