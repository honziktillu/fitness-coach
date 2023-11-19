import bell from '../../assets/Bell.svg'
import bowl from '../../assets/Bowl.svg'
import calendar from '../../assets/Calendar.svg'
import friends from '../../assets/Friends.svg'
import notes from '../../assets/Note.svg'
import run from '../../assets/Run.svg'
import stats from '../../assets/Stats.svg'
import weight from '../../assets/Weight.svg'
import settings from '../../assets/Settings.svg'
import logout from '../../assets/Logout.svg'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useEffect, useState} from 'react'

export const listItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <img src={notes} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src={calendar} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Timetable" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={run} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Exercises" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={bowl} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Dishes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={weight} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Programs" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <img src={stats} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Stats" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={friends} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Friends" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={bell} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Notificatons" />
    </ListItemButton>
  </React.Fragment>
);

export const bottomListItems = (
  <div className="bottomListItems">
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <img src={stats} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={logout} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText className='logoutText' primary="Log out" />
    </ListItemButton>
  </React.Fragment>
  </div>
);