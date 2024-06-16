import { MenuItem,Menu,Icon } from 'semantic-ui-react';
//target='_blank' open a new tab
function Header(){
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
    </Menu>
  )
  
}

export default Header;