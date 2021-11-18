import React,{ useContext }  from 'react';

import Drawer from '@mui/material/Drawer';

import PanelSession from './panel-context'


interface Props {
  children?:React.ReactElement | React.ReactElement[]
}
export const Panel = (props:Props) => {
    const ctx = useContext(PanelSession);
    const list = () => (
        <div
          role="presentation"
          style = {{width:"300px"}}
        >
         {props.children}
        </div>
      );
    
      return (
        <div>
           <React.Fragment>
              <Drawer anchor={"left"} open={ctx.PanelState} onClose={()=>ctx.setPanelState(false)}>
                {list()}
              </Drawer>
            </React.Fragment>
        </div>
      );
}
