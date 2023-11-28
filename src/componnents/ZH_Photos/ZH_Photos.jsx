import './ZH_Photos.css'
const ZH_Photos = (props) => {
    return (
        <>
        <div className='zh-gl-3'>
                <img className='img1' src={props.img11}/>
                <img className='img2' src={props.img12}/>
                <img className='img3' src={props.img13}/>
            </div>
            
            <div className='zh-gl-4'>
                <img className='img1' src={props.img21}/>
                <img className='img2' src={props.img22}/>
                <img className='img3' src={props.img23}/>
                <img className='img4' src={props.img24}/>
            </div>
        </>
    )
}

export default ZH_Photos




