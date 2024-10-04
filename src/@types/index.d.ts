import IndexGroups from "@screens/IndexGroups";
import Root from "../../my-app/app/+html";
import theme from "../theme";

declare module 'styled-components/native' {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType { }
}

declare global {
    namespace ReactNavigation {
        interface RootParamList {
            IndexGroups: undefined,
            IndexParticipants: {
                group: string
            },
            StoreGroup: undefined
        }

    }
}