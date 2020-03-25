/*
 *  Defines the routes used in the application
 *
 */

import StoreDashboard from "pages/StoreDashboard";
import StoreItems from "pages/StoreItems";
import ProductItems from "pages/ProductItems";


const dashboardRoutes = [{
    path: "/",
    component: StoreDashboard
  },
  {
    path: "/stores",
    component: StoreItems
  },
  {
    path: "/products",
    component: ProductItems
  }
];

export default dashboardRoutes;