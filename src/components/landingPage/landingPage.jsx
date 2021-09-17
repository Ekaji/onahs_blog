import React, { useState, useEffect } from "react"
import Emoji from '../emoji'
// import VideoComponent from "../video_component/video_component";

const LandingPage = () => {

    const helloArray = [
        { 
        // fixes bug where first value is not read
        },
        { 
            English: 'Hello'
        },
        {
            Yoruba: 'Bao ni'
        },
        {
            Igbo: 'Kedu'
        }, {
            Nigerian_Pidgin: 'How fa'
        }, {
            Hausa: 'Sannu'
        }
    ];

    const [greeting, setGreeting] = useState((Object.values(helloArray[0])))

    useEffect(() => {
        let i = 0;
        const updateGreeting = () => {
            setGreeting(helloArray[i]);
            setTimeout(() => {
                if (i == helloArray.length - 1)  i = 0;
                    i++;
                updateGreeting()
            }, 4000);
        };
        updateGreeting()
        return() => clearTimeout(updateGreeting);
    }, [])


    return(
        <div className="flex flex-col h-screen justify-center items-center ">
            <div className="w-3/4 anton">
                {/* <VideoComponent /> */}
                <div className="text-3xl"> {(Object.values(greeting))}</div>
                <div className="text-6xl uppercase"> i'm 
                    <span className=""> ekaji onah,  
                        {/* <Emoji symbol = '👋' label='waving hand'/>  */}
                    </span> CREATIVE WEB DEVELOPER BASED IN ABUJA, NIGERIA. 
                </div> 
            </div>
        </div>
    )
}

export default LandingPage