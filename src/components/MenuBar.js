import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Button,
    Box,
    Heading,
} from 'grommet';

const MenuBar = () => {
  const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  return (
    <React.Fragment>
      <AppBar >
        <a href="https://zkrollups.xyz/" style={{ textDecoration: 'none' }}>
        <Heading level='3' color='white' margin={{left:"medium", top:"none", bottom:"none"}}>zkRollup Directory</Heading>
        </a>
        <div >
          <span alignContent="center">
            {
            <Link to="/tokens" style={{ textDecoration: 'none' , color: "white"}}>
              <Button label="Tokens" hoverIndicator style={{ primary: true, color: "white", border:"none", position:"relative", top:"0px", fontSize:"14px", paddingRight:"5px", paddingLeft:"5px"}}/> 
            </Link>
            }
            {
            <Link to="/resources" style={{ textDecoration: 'none' , color: "white"}}>
              <Button label="Resources" hoverIndicator style={{ primary: true, color: "white", border:"none", position:"relative", top:"0px", fontSize:"14px", paddingRight:"5px", paddingLeft:"5px"}}/> 
            </Link>
            }
            {
            <Link to="/about" style={{ textDecoration: 'none' , color: "white"}}>
              <Button label="About" hoverIndicator style={{ primary: true, color: "white", border:"none", position:"relative", top:"0px", fontSize:"14px", paddingRight:"5px", paddingLeft:"5px"}}/> 
            </Link>
            }
            {
            <Link to="/about" style={{ textDecoration: 'none' , color: "white"}}>
              <Button label="Contact" hoverIndicator style={{ primary: true, color: "white", border:"none", position:"relative", top:"0px", fontSize:"14px", paddingRight:"5px", paddingLeft:"5px"}}/> 
            </Link>
            }
          </span>
        </div>
      </AppBar>
    </React.Fragment>
)};

export default MenuBar;
