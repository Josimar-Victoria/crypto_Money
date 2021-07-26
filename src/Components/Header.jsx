import styled from "styled-components"
import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <HeaderContainer>
        <Link to="/">
            <img src='https://uspto.report/TM/88004689/mark' alt='logo'/> 
        </Link>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
margin-bottom: 10vh;
& img { 
    margin-top: 1rem;
    height: 70px;
    cursor: pointer;
    margin-left: 1rem
}`
