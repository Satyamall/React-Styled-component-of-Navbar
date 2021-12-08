
import styled from "styled-components";

const Wrapper=styled.nav`
    width: 96%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    position: relative;
    padding-right: 30px;
`;

const Link=styled.a`
   text-decoration: none;
   color: white;
   font-size: 25px;
   margin-left: 20px;
`;

export default function Navbar(){

    return (
       <Wrapper>
            <img src="./logo192.png" alt="" className="logo" />
            <br />
           <div className="link">
               <Link>Learn</Link>
               <Link>Resources</Link>
               <Link>About</Link>
           </div>
       </Wrapper>
    );
}