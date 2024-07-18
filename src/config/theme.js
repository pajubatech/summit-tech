import { createTheme } from "@mui/material";
import { ptBR } from "@mui/material/locale";

let theme = createTheme(
    {
        palette: {
            mode: "light",
            primary: {
                main: "#9B7FFF",
                light: "#6A57EE",
                medium: "#F7F7F7",
                font: "#CCAAFF",
            },
            secondary: {
                main: "#6A57EE",
                light: "#F5FBFF",
                medium: "#E1DDFF",
            },
        },
        shadows: {
            0: "0px 0px 0px rgba(133, 157, 177,0.2);",
            1: "0px 2px 10px rgba(133, 157, 177,0.2);",
            8: "0px 2px 10px rgba(133, 157, 177,0.2);",
            24: "0px 2px 10px rgba(133, 157, 177,0.2);",
        },
        typography: {
            fontFamily: ["Montserrat", "sans-serif"].join(","),
        },
    },
    ptBR
);

export { theme };