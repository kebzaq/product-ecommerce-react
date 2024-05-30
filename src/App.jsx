import { useEffect, useState } from "react";
import "./App.css";
import { Box, Typography, Grid } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductPage from "./ProductPage";
import Products from "./Products";
import Sidebar from "./Sidebar";
import useFetchProducts from "./hooks/useFetchProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [companiesList, setcompaniesList] = useState([]);
  // const [singleProduct, setSingleProduct] = useState({});
  const [selectProduct, setSelectProduct] = useState({});
  const { data, companies } = useFetchProducts();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  useEffect(() => {
    if (data) {
      setProducts(data);
      setcompaniesList(companies);
    }
  }, [data, companies]);

  //selected Company products
  const selectedProducts = (selected) => {
    setSelectedCompany(selected);
    renderSelectedCompanyProducts();
    console.log(selected, "selected company");
  };
  const renderSelectedCompanyProducts = () => {
    if (selectedCompany === "all") {
      setProducts(data);
    } else {
      const sProducts = data.filter((product) => {
        return product.company === selectedCompany;
      });
      setProducts(sProducts);
      console.log(sProducts, "selected products");
    }
  };

  //search input handler
  const onSeachChange = (value) => {
    setSearchValue(value);
    console.log(value, "onSeachChange");
    filteredProducts();
  };
  const filteredProducts = () => {
    const fProducts = data.filter((product) => {
      return product.name.includes(searchValue);
    });
    console.log(fProducts, "filtered");
    setProducts(fProducts);
  };
  // const getCategory = () => {
  //   const categoryList = new Set(["all"]);
  //   products.map((el) => categoryList.add(el.company));
  //   setCompanies([...categoryList]);
  // };

  const navigate = useNavigate();

  const getSelectedProduct = (product) => {
    // const selectedProduct = products.find((el) => el.id === id);
    setSelectProduct(product);
    console.log("selected:", product);
    navigate(`/products/${product.name}`);
  };

  console.log(companiesList, "companies APP");

  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Routes>
              <Route
                path="*"
                element={
                  <Sidebar
                    companiesList={companiesList}
                    handleSearch={onSeachChange}
                    selectedCompany={selectedProducts}
                    // getSelectedProduct={getSelectedProduct}
                  />
                }
              />
            </Routes>

            {/* <Sidebar /> */}
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route
                path="*"
                element={
                  <Products
                    products={products}
                    getSelectedProduct={getSelectedProduct}
                  />
                }
              />
              <Route
                path="/products/:name"
                element={<ProductPage product={selectProduct} />}
              />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
