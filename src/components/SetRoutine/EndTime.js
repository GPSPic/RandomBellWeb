import { useState } from "react"
import RegularText from "../texts/RegularText"

const EndTime = ({ endTime, handleEndTimeChange }) => {
    const [newEndTime, setNewEndTime] = useState(endTime)
    const handleChange = (e) => {
        setNewEndTime(e.target.value)
        handleEndTimeChange(e.target.value)
        
    }
    return ( 
        <div className='end-time'>
            <RegularText text="End Time" />
            <input type ='time' value={newEndTime} onChange={handleChange}/>
        </div>
     );
}
 
export default EndTime;