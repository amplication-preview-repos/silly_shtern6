import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { BurgerTitle } from "../burger/BurgerTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { DeliveryTitle } from "../delivery/DeliveryTitle";
import { MapTrackingTitle } from "../mapTracking/MapTrackingTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="burger.id" reference="Burger" label="Burger">
          <SelectInput optionText={BurgerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="deliveries"
          reference="Delivery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="delivery.id"
          reference="Delivery"
          label="Delivery"
        >
          <SelectInput optionText={DeliveryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="mapTrackings"
          reference="MapTracking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MapTrackingTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="orderDate" source="orderDate" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
