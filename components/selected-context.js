import { createContext } from "react";

const SelectedContext = createContext({
    selected: {},
    setSelected: () => {},
})

export default SelectedContext