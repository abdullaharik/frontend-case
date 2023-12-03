import React from "react";
import "./App.css";
import { CategoryList } from "./components/templates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { URL } from "./domain/constants";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CategoryList url={URL.categories} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
