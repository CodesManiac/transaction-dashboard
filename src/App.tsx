import React from 'react';
import './App.css';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Users from './pages/Users';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ShortLoan from './pages/ShortLoan';
import InstallmentLoan from './pages/InstallmentLoan';
import Loans from './pages/Loans';
import Transaction from './pages/Transaction';
import Staff from './pages/Staff';
import AuditTrail from './pages/AuditTrail';
import { Payments } from './pages/Payments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      
      {
        path: 'wallet',
        element: <Wallet />,
      },
      {
        path: 'dashboard/short-loan',
        element: <ShortLoan />,
      },
      {
        path: 'dashboard/installment-loan',
        element: <InstallmentLoan />,
      },
      {
        path: 'loans',
        element: <Loans />,
      },
      {
        path: 'transaction',
        element: <Transaction />,
      },
      {
        path: 'staff',
        element: <Staff />,
      },
      {
        path: 'payments',
        element: <Payments />,
      },
      {
        path: 'audit',
        element: <AuditTrail />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
