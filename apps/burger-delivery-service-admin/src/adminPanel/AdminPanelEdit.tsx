import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdminPanelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adminEmail" source="adminEmail" type="email" />
        <TextInput label="adminName" source="adminName" />
        <TextInput label="adminPassword" source="adminPassword" />
      </SimpleForm>
    </Edit>
  );
};
