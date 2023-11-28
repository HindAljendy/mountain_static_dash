import AD_Form_NewRooms from "../AD_Form_NewRooms/AD_Form_NewRooms"
import Topbar from "../Topbar/Topbar"

const AD_NewRoom = () => {
    return (
        <div className='HJ_new-Room  HJ_container '>
            <Topbar title="Rooms / New Room"/>
            <AD_Form_NewRooms/>

        </div>
    )
}

export default AD_NewRoom





