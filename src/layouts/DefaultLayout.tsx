import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { ScrollToTop } from '../components/scrollToTop/ScrollToTop';
import { Wrapper } from "../components/wrapper/Wrapper";


export function DefaultLayout() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Wrapper>
                <Outlet/>
            </Wrapper>
        </div>
    )
}