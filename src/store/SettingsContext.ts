import react from "react";

const SettingsContext = react.createContext({
    workTime: 45,
    breakTime: 15,
    setWorkTime: (e: any) => {},
    setBreakTime: (e: any) => {}

})

export default SettingsContext