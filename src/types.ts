export interface SidebarChildType {
    id: number;
    title: string;
    route: string;
    children?: SidebarChildType[];

}
export interface SidebarType {
    id: number;
    title: string;
    icon: string;
    route: string;
    children?: SidebarChildType[];

}
export interface WithdrawalType {
    id: number;
    amount: string;
    cases: number;
}
export interface SummaryType {
    id: number;
    title: string;
    amount: string;
}
export interface ChartType {
    id: number;
    name:string,
    Deposit: number;
    Withdrawal: number;
}
export interface TransactionType{
    id: number;
    transactionId: string;
    name: string;
    reference: string;
    type: string;
    amount: string;
    date: string;
    status: string;
}