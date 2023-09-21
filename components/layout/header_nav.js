import Image from 'next/image'
import React, { useState } from 'react'

// styles and Material UI
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const navItems = ['SEARCH', 'Login']
const langSettings = ['En', 'Fr', 'De', 'Es', 'ZH', 'Jp']


function HeaderNav() {
  const [language, setLanguage] = useState('En')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl)
  const handleShowMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = (selectedLanguage) => {
    setAnchorEl(null)
    setLanguage(selectedLanguage)
  }

  const handlePageLink =(e) => {
    console.log('clicked')
  }

  return (
    <>
      <AppBar
        component="nav"
        position="static"
        color='transparent'
        elevation={0}
        py={5}
        sx={{
          paddingTop: { xs: 3, md: 4 },
          paddingRight: { xs: 2, md: 5 },
          paddingLeft: { xs: 2, md: 5 },
        }}
      >
        <Toolbar disableGutters sx={{ paddingTop:{ xs: 0, md: 7.2 }}}>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{maxWidth: { xs: '11rem', md: '20rem' }}}>
              <Image
                src='/images/Logo.svg'
                alt='wassp logo'
                width={300}
                height={180}
                style={{ height: '100%', width: '100%' }}
                />
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex' }, textAlign: { xs: 'center' }}}>
            {navItems.map((page) => (
              <Button
                key={page}
                onClick={handlePageLink}
                sx={{
                  color: 'white',
                  fontFamily:'norwester',
                  display: 'block',
                  fontSize: { xs: 18, md: 20},
                  fontWeight: 100,
                  paddingRight: 5,
                }}
              >
                {page}
              </Button>
            ))}

            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
              <Button
                variant='text'
                sx={{
                  color: 'white',
                  display: 'block',
                  fontFamily:'norwester',
                  fontSize: 20,
                  fontWeight: 300,
                }}
              >
                {language}
              </Button>

              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                sx={{ ml:-2, mr: 3,}}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleShowMenu}

              >
                <Image
                  src="/images/ArrowDown.svg"
                  alt='down menu'
                  width={30}
                  height={30}
                  sx={{ paddingTop:{ xs: 0, md: 7.2 }}}
                />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {langSettings.map((item)=> (
                  <MenuItem key={item} onClick={() => handleClose(item)}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ pl: 2}}
              >
                <Image
                  src="/images/Menu.svg"
                  alt='menu'
                  width={35}
                  height={35}
                  />
              </IconButton>

            </Box>
          </Toolbar>
      </AppBar>
    </>
  )
}

export default HeaderNav;