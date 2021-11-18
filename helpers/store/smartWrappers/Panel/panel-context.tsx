import React, { useState } from 'react';

const PanelSession = React.createContext({
  PanelState:false,
  setPanelState:(PanelState:boolean) => {}
});

interface Props {
    children: React.ReactNode
}

export const PanelSessionProvider = (props:Props) => {

  const [state, setState] = useState({
    PanelState:false,
    setPanelState:(PanelState:boolean) => {
      setState({...state,PanelState})
    },
  });
  return (
    <PanelSession.Provider value = {state}>

      {props.children}
    </PanelSession.Provider>

  );
};

export default PanelSession;
