import { ChartType, SidebarType, SummaryType, TransactionType, WithdrawalType } from "./types";
import {
  Staff,
  Dashboard,
  Audit,
  Avatar,
  Money,
  Discount,
  Wallet,
  Settings,
} from "./assets/icons";

export const sideBarData: SidebarType[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: Dashboard,
    route: "dashboard/short-loan",
    children: [
        {
          id: 1.1,
          title: "Short Loan",
          route: "dashboard/short-loan",
        },
        {
          id: 1.2,
          title: "Installment Loan",
          route: "dashboard/installment-loan",
        },
      ],
  },
  {
    id: 2,
    title: "Loans",
    icon: Money,
    route: "loans",
  },
  {
    id: 3,
    title: "Transaction",
    icon: Avatar,
    route: "transaction",
  },
  {
    id: 4,
    title: "Users",
    icon: Avatar,
    route: "users",
  },
  {
    id: 5,
    title: "Payments",
    icon: Discount,
    route: "payments",
  },
  {
    id: 6,
    title: "Wallet",
    icon: Wallet,
    route: "wallet",
  },
  {
    id: 7,
    title: "Staff",
    icon: Staff,
    route: "staff",
  },
  {
    id: 8,
    title: "Audit Trail",
    icon: Audit,
    route: "audit",
  },
  {
    id: 9,
    title: "Settings",
    icon: Settings,
    route: "settings",
  },
];

export const widthdrawals: WithdrawalType[] = [
  {
    id: 1,
    amount: "N3,402,300",
    cases: 722,
  },
  {
    id: 2,
    amount: "N3,402,300",
    cases: 722,
  },
  {
    id: 3,
    amount: "N3,402,300",
    cases: 722,
  },
  {
    id: 4,
    amount: "N3,402,300",
    cases: 722,
  },
];
export const summary: SummaryType[] = [
  {
    id: 1,
    title: "Total Withdrawals",
    amount: "N3,402,300",
  },
  {
    id: 2,
    title: "Total Deposits",
    amount: "N3,402,300",
  },
  {
    id: 3,
    title: "Total Payments",
    amount: "N3,402,300",
  },
  {
    id: 4,
    title: "Total Commission",
    amount: "N3,402,300",
  },
  {
    id: 5,
    title: "Total Amount",
    amount: "N3,402,300",
  },
];

export const chartData: ChartType[] = [
  {
    id: 1,
    name: "0",
    Deposit: 25.5,
    Withdrawal: 26.5,
  },
  {
    id: 2,
    name: "2",
    Deposit: 26.6,
    Withdrawal: 26.7,
  },
  {
    id: 3,
    name: "4",
    Deposit: 26.5,
    Withdrawal: 27,
  },
  {
    id: 4,
    name: "6",
    Deposit: 26.3,
    Withdrawal: 27.5,
  },
  {
    id: 5,
    name: "8",
    Deposit: 27,
    Withdrawal: 28.8,
  },
  {
    id: 6,
    name: "10",
    Deposit: 25.5,
    Withdrawal: 27.5,
  },
  {
    id: 7,
    name: "12",
    Deposit: 26.6,
    Withdrawal: 26.4,
  },
  {
    id: 8,
    name: "14",
    Deposit: 26.4,
    Withdrawal: 25.8,
  },
  {
    id: 9,
    name: "16",
    Deposit: 25.8,
    Withdrawal: 25.8,
  },
  {
    id: 10,
    name: "18",
    Deposit: 27.3,
    Withdrawal: 26.4,
  },
  {
    id: 11,
    name: "20",
    Deposit: 26.3,
    Withdrawal: 26.8,
  },
  {
    id: 12,
    name: "22",
    Deposit: 26.4,
    Withdrawal: 25.6,
  },
];

export const allTransactions: TransactionType[]=[
    {
        id: 1,
        transactionId: '0000001',
        name:'Tife Balogun',
        reference:'tanya.hill@example.com',
        type:'Deposit',
        amount: '₦34,694.145',
        date: 'Dec 4, 2019 21:42',
        status:'Successful'
    },
    {
        id: 2,
        transactionId: '0000001',
        name:'Kelechi Nwosu',
        reference:'georgia.young@example.com',
        type:'Withdrawal',
        amount: '₦784,324.34',
        date: 'Dec 7, 2019 23:26',
        status:'Failed'
    },
    {
        id: 3,
        transactionId: '0000001',
        name:'Temi Obadofin',
        reference:'deanna.curtis@example.com',
        type:'Payments',
        amount: '₦11,784.22',
        date: 'Dec 30, 2019 05:18',
        status:'Pending'
    }
]
