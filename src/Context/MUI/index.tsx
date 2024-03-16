import {createContext, useContext, useMemo, useReducer} from "react";


interface MatrialUiContextType {
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}

// Adjust the context to expect an array of exactly two elements: [MatrialUiContextType, Dispatch<ActionType>]
const MaterialUi = createContext<any[] | undefined>(undefined);

MaterialUi.displayName = "MaterialUi"

interface ActionType{
    type:string
    value:string
}

interface StateType{
    mode : string
    themeValue : number
}
function reducer(state:StateType , action: ActionType) {
    switch (action.type) {
        case "MODE" : {
            return {...state, mode: action.value}
        }

        default: {
            throw new Error(`Unhandled action type ${action.type}`)
        }
    }
}


function AppMuiProvider({children} : {children : React.ReactNode}) {
    const initialState : StateType = {
        mode: "",
        themeValue:0,
    }

    const [controller, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);
    const value = useMemo(() => [{ state: controller, dispatch }, dispatch], [controller, dispatch]);
    return <MaterialUi.Provider value={value}>{children}</MaterialUi.Provider>
}

function useAppMuiController() {
    const context = useContext(MaterialUi)
    if (!context) {
        throw new Error("useMaterialUIController should be used inside the MaterialUIControllerProvider.")
    }

    return context
}

const setMode = (dispatch: React.Dispatch<ActionType>, value: string) => dispatch({ type: "MODE", value });
export {
    AppMuiProvider,
    useAppMuiController,
    setMode
}