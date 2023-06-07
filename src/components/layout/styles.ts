import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  .wrapper {
    margin: auto;
    width: 90%;

    @media (max-width: 640px) {
      width: 100%;
    }
  }
`;

export const Nav = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;
  width: 100%;
  transition: 0.3s ease;
  z-index: 99999;

  position: fixed;
  background: #fff;

  &.scroll-down {
    transform: translate3d(0px, -100px, 0px);
  }

  &.added {
    position: sticky;
  }
`;
export const NavMiddle = styled.div`
  border-top: 1px solid #170728;
  margin-top: 10px;

  @media (max-width: 960px) {
    display: none;
  }
`;
export const NavRight = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Bar = styled.div`
  display: none;
  cursor: pointer;
  background: #170728;
  height:40px;
  width:40px;
  border-radius: 100px;


  
  @media (max-width: 640px) {
    position:relative;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

  
    
    /* height: 40px; */
    /* overflow-x: hidden; */
    div,div::before,div::after {
        background: #fff;
        content: "";
        display: block;
        height: 1px;
        width: 20px;
        position: absolute;
        transition: background ease 0.3s, top ease 0.3s 0.3s;
          transform ease 0.3s;
  }

  div{
    &::before {
      top: -3px;
      }

      &::after {
          top: 3px;
      }
  }

  &.opened{
       background:#befecd;
       border: 1px solid #170728;

       div,div::before,div::after {
        background: #170728;
      }
    
     div{
       background: transparent;

       &::before,&::after{
         top: 0;
         transition: top ease .3s, transform ease .3s .3s;
       }
    &::before {
      transform: rotate(45deg);
      }

      &::after {
      transform: rotate(-45deg);
      }
  }
  }
}
`;

export const Item = styled.div<{ value: string }>`
  font-size: 16px;
  font-weight: 400;
  padding: 0px 20px;
  color: #170728;
  transition: transform 0.5s ease;
  font-family: "Space Grotesk", sans-serif;
  display: inline-block;
  position: relative;
  cursor: pointer;

  &:first-child {
    &:before {
      content: "";
      position: absolute;
      height: 1px;
      width: 50px;
      top: -2px;
      left: -48px;
      background: #170728;
    }
  }

  &:last-child {
    &:after {
      content: "";
      position: absolute;
      height: 1px;
      width: 50px;
      top: -2px;
      right: -48px;
      background: #170728;
    }
  }

  &.active {
    color: transparent;

    span {
      /* &:before {
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        top: 2px;
        left: 0px;
        background: #170728;
        border-radius: 100px;
        box-shadow: 10px 10px 0px green;
      }

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 50px;
        top: -2px;
        right: -48px;
        background: #170728;
      } */
    }
  }

  &.active::after {
    content: "${({ value }) => value}";
    position: absolute;
    height: 30px;
    width: fit-content;
    padding: 2px 20px;
    color: #170728;
    left: 0px;
    bottom: -4px;
    border: 1px solid #170728;
    border-top: 1px solid #fff;
    border-radius: 0px 0px 10px 10px;
  }
`;
export const MobileMenu = styled.div`
  position: relative;
  background: #fff;
  width: 100%;
  position: absolute;
  top: 99px;
`;

export const MItem = styled.a`
  font-size: 20px;
  font-weight: 400;
  padding: 20px 20px;
  color: #170728;
  transition: transform 0.5s ease;
  font-family: "Space Grotesk", sans-serif;
  display: block;
  position: relative;
  cursor: pointer;
`;
