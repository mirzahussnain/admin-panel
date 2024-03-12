import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./components";
const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Customers = lazy(() => import("./pages/customers"));
const Transactions = lazy(() => import("./pages/transactions"));
const CreateProduct = lazy(() => import("./pages/manage/newProduct"));
const ManageProduct = lazy(() => import("./pages/manage/manageProduct"));
const ManageTransaction = lazy(
  () => import("./pages/manage/manageTransaction")
);
const BarChart = lazy(() => import("./pages/charts/barcharts"));
const PieChart = lazy(() => import("./pages/charts/piecharts"));
const LineChart = lazy(() => import("./pages/charts/linecharts"));
const StopWatch = lazy(() => import("./pages/apps/stopwatch"));
const Coupon = lazy(() => import("./pages/apps/coupon"));
const Toss = lazy(() => import("./pages/apps/toss"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button
                  style={{
                    position: "fixed",
                    top: "40%",
                    left: "40%",
                    margin: "auto",
                    width: "25vmax",
                    height: "15vh",
                    border: "none",
                    outline: "none",
                    backgroundColor: "rgba(44,104,255)",
                    color:"white",
                    fontSize: "1.8rem",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Visit Dashboard
                </button>
              </Link>
            }
          />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transactions" element={<Transactions />} />

          {/*Manage*/}

          <Route path="/admin/product/new" element={<CreateProduct />} />
          <Route path="/admin/products/:id" element={<ManageProduct />} />
          <Route
            path="/admin/transactions/:id"
            element={<ManageTransaction />}
          />
          {/* Charts */}
          <Route path="/admin/charts/bar" element={<BarChart />} />

          <Route path="/admin/charts/line" element={<LineChart />} />
          <Route path="/admin/charts/pie" element={<PieChart />} />
          {/*Apps*/}
          <Route path="/admin/apps/stopwatch" element={<StopWatch />} />
          <Route path="/admin/apps/toss" element={<Toss />} />
          <Route path="/admin/apps/coupon" element={<Coupon />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
