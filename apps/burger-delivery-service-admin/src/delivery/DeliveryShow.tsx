import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BURGER_TITLE_FIELD } from "../burger/BurgerTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DELIVERY_TITLE_FIELD } from "./DeliveryTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const DeliveryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="DeliveryPerson" source="deliveryPerson" />
        <TextField label="deliveryStatus" source="deliveryStatus" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="deliveryId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Burger"
              source="burger.id"
              reference="Burger"
            >
              <TextField source={BURGER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Delivery"
              source="delivery.id"
              reference="Delivery"
            >
              <TextField source={DELIVERY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="orderDate" source="orderDate" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
