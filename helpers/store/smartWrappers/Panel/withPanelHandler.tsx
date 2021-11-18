import React, {useContext} from 'react'
import PanelSession from './panel-context'

interface Response{
    panelHandler: (openPanel:boolean)=>void
}
interface Props{
}
const withPanelHandler = <P extends Props>(WrappedComponent:React.ComponentType<P & Response>) => {
    return (props:P) => {
        const ctx = useContext(PanelSession);

        return <WrappedComponent {...props}
            panelHandler = {(openPanel:boolean) => ctx.setPanelState(openPanel)}
         />

    }
}
export default withPanelHandler;
