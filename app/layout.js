"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./global.css";
import { Provider } from "react-redux";
import { LoadScript } from "@react-google-maps/api";
import ViewProvider from "../providers/view.provider";
import Header from "../components/header/Header";
import { store } from "../store/store";
import ErrorBoundary from "../components/errorboundary/ErrorBoundary";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="body">
        <ErrorBoundary>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          >
            <AppRouterCacheProvider>
              <Provider store={store}>
                <ViewProvider>
                    <Header />
                    {children}
                </ViewProvider>
              </Provider>
            </AppRouterCacheProvider>
          </LoadScript>
        </ErrorBoundary>

      </body>
    </html>
  );
}
