import React, { useState } from "react";
import { apiService } from "../helpers/services/apiService";

const AppContext = React.createContext(null);
export { AppContext };

const AppContextContainer = (props) => {
  const [homeData, setHomeData] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [contactData, setContactData] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [selectedNews, setSelectedNews] = useState({});

  const getHomeInfo = () => {
    apiService()
      .get("home/get")
      .then((response) => {
        setHomeData(response);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  const getAboutInfo = () => {
    apiService()
      .get("about/get")
      .then((response) => {
        setAboutData(response);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  const getContactInfo = () => {
    apiService()
      .get("contact/get")
      .then((response) => {
        setContactData(response);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  const getCategoryList = () => {
    apiService()
      .get("category/get")
      .then((response) => {
        setCategoryList(response);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  const getNewsList = () => {
    apiService()
      .get("news/get")
      .then((response) => {
        setNewsList(response);
      })
      .catch((e) => {
        console.warn(e);
      });
  };

  return (
    <AppContext.Provider
      value={{
        homeData,
        aboutData,
        contactData,
        categoryList,
        newsList,
        selectedNews,
        setSelectedNews,
        getHomeInfo,
        getAboutInfo,
        getContactInfo,
        getCategoryList,
        getNewsList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextContainer;
