import { Route, Routes } from "react-router-dom"
import ApiTest from "../test"
import App from "../App"

const FrontendRoute = ()=>{
    return(
        <Routes>
            <Route path="" element = {<App/>}/>
            <Route path="/test" element={<ApiTest/>}/>
        </Routes>
    )
}

export default FrontendRoute