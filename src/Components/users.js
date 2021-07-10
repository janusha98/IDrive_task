import React, { useState } from "react";
import {
  List,
  TextInput,
  SimpleForm,
  Edit,
  Create,
  ReferenceInput,
  SelectInput,
  Datagrid,
  ReferenceField,
  DateInput,
  TextField,
  EmailField,
  EditButton,
  SaveButton,
  EditGuesser,
  Button,
  required,
  DateField
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";

const matchPassword = (value, allValues) =>
  value !== allValues.password
    ? `This field must match with your password field`
    : undefined;

const useStyles = makeStyles({
  headerCell: {
    backgroundColor: "#f7f7f7"
  },
  secondary: {
    main: "#ff9800" // Not far from orange
  }
});

export const UserList = (props) => {
  const classes = useStyles();
  return (
    <List {...props}>
      <Datagrid rowClick="edit" {...props} classes={classes}>
        <EmailField source="email" sortBy="created_at" />
        <TextField source="name" />
        <DateField source="created_at" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
};
export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="email" />
      <TextInput source="name" />
      <DateInput
        label="Created at"
        source="published_at"
        defaultValue={new Date()}
      />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const handleClose = () => setShowDialog(false);
  const handleShow = () => setShowDialog(true);
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="email" validate={required()} />
        <TextInput source="name" validate={required()} />
        <TextInput
          label="Password"
          source="password"
          type="password"
          validate={required()}
        />
        <TextInput
          label="Confirm Password"
          source="confirmpassword"
          type="password"
          validate={(required(), matchPassword)}
        />
        <DateInput
          label="Created at"
          source="published_at"
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};
