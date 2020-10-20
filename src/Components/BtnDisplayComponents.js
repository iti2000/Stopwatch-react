import React from 'react'

export default function BtnDisplayComponents(props) {
    return (
        <div>
            {(props.status === 0)?
            <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.start}>START</button> : ""
        }
        {(props.status === 1)?
            <div>
               <button className="stopwatch-btn stopwatch-btn-red"
                onClick={props.stop}>STOP</button> 
                <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={props.reset}>RESET</button> 
            </div> : ""
        }
        {(props.status === 2)?
            <div>
               <button className="stopwatch-btn stopwatch-btn-gre"
                onClick={props.resume}>RESUME</button> 
                <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={props.reset}>RESET</button> 
            </div> : ""
        }
            
        </div>
    )
}
