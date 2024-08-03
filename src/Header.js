import { MenuItem,Menu,Icon } from 'semantic-ui-react';
import React, {useState, useEffect} from 'react';
//target='_blank' open a new tab

/* function Header(){ */
const Header = () => {
  const [theme, setTheme] = useState('light')
  const handleChange = (e) => setTheme(e.target.checked ? 'dark' : 'light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  
  return(
    <Menu size='large' inverted>
      <MenuItem href='http://facebook.com' /* target='_blank' */>
        <Icon name='facebook' size='large'/>
        FaceBook
      </MenuItem>
      
      <MenuItem href='http://YouTube.com' /* target='_blank' */>
      <Icon name='youtube' size='large'/>
        YouTube
      </MenuItem>

      <MenuItem href='http://instagram.com' /* target='_blank' */>
        <Icon name='instagram' size='large'/>
        Instagram
      </MenuItem>

      <MenuItem position='right'>
        <Icon name='sun' size='large'/>
        <div className='container-switch'>
          <label className="switch">
            <input type="checkbox" onChange={handleChange} checked={theme === 'dark'} />
            <span className="slider"></span>
          </label>
        </div>
        <Icon name='moon outline' size='large'/>
      </MenuItem>
    </Menu>
  )
}

export default Header;