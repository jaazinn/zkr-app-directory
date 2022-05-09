import * as React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from 'prop-types';
import magnifier from '../../actets/magnifier.png'
import "./style.css"
import dropdown_image from "../../actets/dropdown.svg";
import {
  Box,
  TextInput,
} from 'grommet';

const SearchBar = ({ setSearch, search,setSearch_category, search_category }) => {
  
  const handleChange = (e, result) => {
    const { name, value } = result;
    // console.log("result===========<>> ",result)
    setSearch_category(value)
    // this.setState({
    //    [name]: value
    //   });
  };
  const options = [
    { key: 1, text: 'All Categories', value: "all" },
    { key: 2, text: 'Rollups', value: "rollups" },
    { key: 3, text: 'Wallets', value: "wallets" },
    { key: 4, text: 'Infra', value: "infra" },
    { key: 5, text: 'dApps', value: "dApps" },
    { key: 6, text: 'NFTs', value: "nfts" },
    { key: 7, text: 'Games', value: "games" },
    { key: 8, text: 'Social', value: "social" },

    { key: 9, text: 'DAOs', value: "daos" },
    { key: 10, text: 'Misc', value: "misc" },


  ]



  return (
    <React.Fragment>

   
    

    
      <Box   className='serach_bar'  margin={{horizontal: 'auto', bottom: 'medium', top: 'large'}} direction="row" justify="between" gap="small" width={"52.4rem"} style={{minWidth:"200px"}}>
    <div className='bar_inp d-flex'>
   {/* <AiOutlineSearch size={23} className="m-2"/> */}
   <img src={magnifier} width={'18px'} height={'18px'} className="m-3"/>
    <TextInput  placeholder="Search projects by title" value={search} onChange={event => setSearch(event.target.value)} />
    </div>

          <div className='d-flex bar_drop'>
          <Menu compact>
    <Dropdown  className='drop_main'   options={options}  item onChange={(e, result) => handleChange(e,result)} value={search_category} icon={<img src={dropdown_image} width={'9px'} height={'6px'}  />}/>
  </Menu>
<button className='ser_btn'>Search</button>

          </div>
    
       
      </Box>
    </React.Fragment>
  )
};

SearchBar.propTypes = {
  setKey: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
};

export default SearchBar;
