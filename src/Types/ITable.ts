export interface ITable {
    header: string[],
    data: string[][],
    onRowClick: (id: string) => void
}