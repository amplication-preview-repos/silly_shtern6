import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminPanelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adminEmail" source="adminEmail" type="email" />
        <TextInput label="adminName" source="adminName" />
        <TextInput label="adminPassword" source="adminPassword" />
      </SimpleForm>
    </Create>
  );
};
