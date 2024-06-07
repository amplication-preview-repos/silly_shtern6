import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { BurgerList } from "./burger/BurgerList";
import { BurgerCreate } from "./burger/BurgerCreate";
import { BurgerEdit } from "./burger/BurgerEdit";
import { BurgerShow } from "./burger/BurgerShow";
import { MapTrackingList } from "./mapTracking/MapTrackingList";
import { MapTrackingCreate } from "./mapTracking/MapTrackingCreate";
import { MapTrackingEdit } from "./mapTracking/MapTrackingEdit";
import { MapTrackingShow } from "./mapTracking/MapTrackingShow";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { AdminPanelList } from "./adminPanel/AdminPanelList";
import { AdminPanelCreate } from "./adminPanel/AdminPanelCreate";
import { AdminPanelEdit } from "./adminPanel/AdminPanelEdit";
import { AdminPanelShow } from "./adminPanel/AdminPanelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BurgerDeliveryService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Burger"
          list={BurgerList}
          edit={BurgerEdit}
          create={BurgerCreate}
          show={BurgerShow}
        />
        <Resource
          name="MapTracking"
          list={MapTrackingList}
          edit={MapTrackingEdit}
          create={MapTrackingCreate}
          show={MapTrackingShow}
        />
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="AdminPanel"
          list={AdminPanelList}
          edit={AdminPanelEdit}
          create={AdminPanelCreate}
          show={AdminPanelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
