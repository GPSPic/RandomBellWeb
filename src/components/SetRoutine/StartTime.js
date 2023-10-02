import { useState } from 'react'
import RegularText from '../texts/RegularText'

const StartTime = ({startTime, handleStartTimeChange}) => {
    const [newStartTime, setNewStartTime] = useState(startTime)

    const handleChange = (e) => {
        setNewStartTime(e.target.value)
        handleStartTimeChange(e.target.value)
    }

    return ( 
        <div className='start-time'>
            <RegularText text="Start Time"/>
            <input type='time' value={newStartTime} onChange={handleChange}></input>
        </div>
     );
}
 
export default StartTime;