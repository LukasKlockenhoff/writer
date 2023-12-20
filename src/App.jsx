import { TextField } from '@mui/material';
import {useState} from "react";

function App() {
    const maxLineLength = 80;

    const [lines, setLines] = useState(["Welcome to writer", "Welcome to writer"]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(5);

    const handleBackspace = () => {
        console.log("backspace")
        console.log(lineIndex)
        console.log(charIndex)
        let currentLine = lines[lineIndex];
        currentLine = currentLine.slice(0, charIndex - 1) + currentLine.slice(charIndex);
        lines[lineIndex] = currentLine;
        setLines(lines);
        if (charIndex > 0) {
            setCharIndex(charIndex - 1);
        } else if (lineIndex > 0) {
            setLineIndex(lineIndex - 1);
            setCharIndex(lines[lineIndex - 1].length);
        }
    }

    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Backspace':
                handleBackspace();
                break;
            default:
                break;
        }
    });

    return (
        <div className="w-1/2 mx-auto min-h-screen">
            {lines.map((line, index) => {
                return <div>{line}</div>
            })}
        </div>
    );
}

export default App;
