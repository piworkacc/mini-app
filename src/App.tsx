import { useEffect, useRef, useState} from 'react'
import './App.css'

import WebApp from '@twa-dev/sdk'

function App() {
    const [count, setCount] = useState(0)
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then(stream => {
                let video = videoRef.current;
                if(video) {
                    video.srcObject = stream;
                    video.play();
                }
            })
            .catch(err => {
                console.error("error:", err);
            });
    };

    return (
        <>
            <video ref={videoRef} />
            <h1>TWA + Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            {/*  */}
            <div className="card">
                <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
                    Show Alert
                </button>
            </div>
        </>
    )
}

export default App