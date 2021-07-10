import "./styles.css";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from "./Components/users";
import { CustomLayout } from "./Components/Layout";
import { defaultTheme } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  ...defaultTheme,
  ...{
    palette: {
      primary: {
        main: "#7edcff"
      },
      secondary: {
        main: "#0089c1"
      }
    }
  }
});

export default function App() {
  return (
    <Admin
      theme={customTheme}
      layout={CustomLayout}
      dataProvider={restProvider("https://jsonplaceholder.typicode.com")}
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
}
