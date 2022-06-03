import React from "react";
import Lorem from "./components/Lorem";

const App = () =>{

    const [lorem, setLorem] = React.useState([]);

    const [newLorem, setNewLorem] = React.useState(true);

    React.useEffect(() =>{

        const generateLorem = async () =>{
    
            const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler");
            const data = await response.json();
            setLorem(data);
    
        };
        generateLorem();

    }, [newLorem]);


    const newLoremGenerator = () =>{
        setNewLorem(prevNewLorem => !prevNewLorem);
    };

    return(

        <div>

            <Lorem  
                paragraphs={lorem}
                generateNew={newLoremGenerator}
            />

        </div>

    );
};

export default App;