import "./Checked.css"

function Checked(props){

    const index = props.index

    if(props.status){
        return(
            <button type="button" onClick={()=>{props.updateStatus(false)}} className="btn btn-outline-primary border-0 btn-lg" >
                <i className="fa-regular fa-square-check"></i>
            </button>
        )
    }else{
        return(
            <button type="button"  onClick={()=>{props.updateStatus(true)}} className="btn btn-outline-primary border-0 btn-lg" >
                <i className="fa-regular fa-square"></i>
            </button>
        )
    }
}

export default Checked