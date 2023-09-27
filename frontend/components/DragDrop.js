import Image from "next/image";
import { useState, useRef } from "react"


const DragDrop = () => {
    const [file, setFiles] = useState(null)
    const inputRef = useRef();
    
    const handleDragOver = (event) => {
        event.preventDefault();
        console.log("dragging over")
    }

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    }   

    const handleUpload = () => { };

    if(file) return (
        <div className="uploads">
            <ul>
                {Array.from(file).map((file, idx) => 
                <li key={idx}>
                    {file.name}
                </li> )}
            </ul>
            <div className="actions">
                <button onClick={() => setFiles(null)}>Cancelar</button>
                <button onClick={handleUpload}>Subir</button>
            </div>
        </div>
    )

    return (
        <>
    
        {!file && (
            <div className="dropzone mx-auto"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                
                <h1 className="text-center mx-auto">Arrastre y suelte archivos</h1>
                <h1 className="my-5">O</h1>

                <input 
                    type="file"
                    multiple
                    onChange={(event) => setFiles(event.target.file)}
                    hidden
                    ref={inputRef}
                  />
                <button onClick={() => inputRef.current.click()}>Seleccione archivos</button>

            </div>
        )}
        </>

    )

};

export default DragDrop