
import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: ${props => props.theme.colors.background1};
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  ${'' /* overflow-x: hidden;  */}

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div`
  background: ${props => props.theme.colors.background1};
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: ${props => props.theme.colors.background3};
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 5px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
    line-height: 2.8rem;
    margin-bottom: 0.5rem;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  opacity: 0.8;
  padding-right: 1.6rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.2rem;
    line-height: 1.8rem;
    padding-right: 3.2rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    line-height: 1.6rem;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 28.8rem;
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 5rem;
    
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: ${props => props.theme.colors.background1};
  border: 1px solid ${props => props.theme.colors.accent1};
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border: none;
  cursor: pointer;
  margin-right: 2rem;
  margin-top: 1rem;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.2)` : `scale(1)`};
  transition: all 0.3s ease-in-out;

  &:focus {
    outline: none;
    outline: 2px solid ${props => props.theme.colors.accent1};
  }

  ${'' /*Issue: The last item in the carousel doesn't light up when active */}
  ${'' /* This is my quick fix */}
  &:last-of-type {

    visibility: hidden;
  }

`


export const CarouselButtonDot = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: .5rem;
  height: .5rem;
`
