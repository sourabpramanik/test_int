import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from '@material-ui/icons/Settings';
import ExtensionIcon from '@material-ui/icons/Extension';
import ComputerIcon from '@material-ui/icons/Computer';
import EditIcon from '@material-ui/icons/Edit';
import WidgetsIcon from '@material-ui/icons/Widgets';
import TableChartIcon from '@material-ui/icons/TableChart';
import AppsIcon from '@material-ui/icons/Apps';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import BookIcon from '@material-ui/icons/Book';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <SettingsIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="LayoutBuilder" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Components</ListSubheader>
    <ListItem button>
      <ListItemIcon>
      <LayersIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Base" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <EditIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Custom" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ExtensionIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Extended" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <WidgetsIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Widgets" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <FormatAlignCenterIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Forms" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <ComputerIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Keen Wizard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <TableChartIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Keen DataTable" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <AppsIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Icons" />
    </ListItem>
    <ListSubheader inset>Custom</ListSubheader>
    <ListItem button>
      <ListItemIcon>
      <BookIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="Blog" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <LiveHelpIcon color="primary"/>
      </ListItemIcon>
      <ListItemText primary="FAQs" />
    </ListItem>

  </div>
);