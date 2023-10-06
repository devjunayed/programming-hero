import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: 
            }
        ]
    }
]);