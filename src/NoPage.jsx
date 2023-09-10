import { useNavigate } from "react-router-dom"

export default function NoPage() {

    const navigate = useNavigate();
    return(
        <>
        <h1>Error, página no encontrada</h1>
        <button onClick={()=> navigate("/") }>Go back</button>
        </>
    )
}