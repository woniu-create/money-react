import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";


const NavWrapper = styled.nav`
  border: 1px solid blue;
  > ul {
    display:flex;
    > li{
      width: 33.3333%;
      text-align:center;
      > a{
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: red;
          .icon{
            fill: red;
          }
        }
      }
    }
  }
`;
const Nav = ()=> {
    return (
       <NavWrapper>
           <ul>
               <li>
                   <NavLink to="/tags" activeClassName="selected">
                       <Icon name="tag"/>
                       标签页
                   </NavLink>
               </li>
               <li>
                   <NavLink to="/money" activeClassName="selected">
                       <Icon name="money"/>
                       记账页
                   </NavLink>
               </li>
               <li>
                   <NavLink to="/statistics" activeClassName="selected">
                       <Icon name="statics"/>
                       统计页
                   </NavLink>
               </li>
           </ul>
       </NavWrapper>
    )
}
export  default  Nav;