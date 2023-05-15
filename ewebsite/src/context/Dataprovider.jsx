import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {
  const [account, setAccount] = useState('');
  
  return (
    <DataContext.Provider value={{ account, setAcount: setAccount }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
