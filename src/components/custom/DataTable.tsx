"use client"
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  ColumnDef,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Spinner from "./Spinner";

type CustomColumnDef<TData> = ColumnDef<TData> & {
  align?: "left" | "center" | "right";
};

interface DataTableProps<TData> {
  columns: (ColumnDef<TData> | CustomColumnDef<TData>)[];
  data: TData[];
  loading?: boolean;
  sortableColumns?: string[];
  search?: {
    searchTitle?: string;
    searchPlaceholder?: string;
  };
  pagination?: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
  };
}

export function DataTable<TData>({
  columns,
  data,
  loading = false,
  sortableColumns = [],
  search,
  pagination,
}: Readonly<DataTableProps<TData>>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    manualPagination: true,
    pageCount: pagination?.totalPages,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <>
      {search && (
        <div className="mb-4 flex w-full">
          <Input
            placeholder={search.searchPlaceholder ?? "Type to search..."}
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
      )}
      <div className="border border-slate-200 rounded-lg h-full overflow-auto">
        <ScrollArea className="w-full relative">
          <Table className="w-full border-separate border-spacing-0">
            <TableHeader className="bg-slate-100">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const columnDef = header.column
                      .columnDef as CustomColumnDef<TData>;
                    const alignment =
                      "align" in columnDef ? columnDef.align : "left";

                    return (
                      <TableHead
                        key={header.id}
                        className={`border-b text-${alignment} px-4`}
                        style={{
                          width: columnDef.size ?? "auto",
                          textAlign: alignment,
                        }}
                      >
                        {sortableColumns.includes(header.column.id) ? (
                          <Button
                            onClick={() => header.column.toggleSorting()}
                            className="flex items-center gap-1 cursor-pointer hover:text-slate-700 p-0 bg-transparent text-gray-500 shadow-none hover:bg-transparent hover:duration-100 transition-all"
                          >
                            {flexRender(columnDef.header, header.getContext())}
                            {header.column.getIsSorted() === "desc" ? (
                              <ArrowUpDown className="h-4 w-4 rotate-180" />
                            ) : (
                              <ArrowUpDown className="h-4 w-4 opacity-50" />
                            )}
                          </Button>
                        ) : (
                          flexRender(columnDef.header, header.getContext())
                        )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-center py-10"
                  >
                    <Spinner />
                  </TableCell>
                </TableRow>
              ) : (
                (() => {
                  const rows = table.getRowModel().rows;
                  if (rows.length === 0) {
                    return (
                      <TableRow>
                        <TableCell
                          colSpan={columns.length}
                          className="text-center py-4"
                        >
                          No data found.
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => {
                        const columnDef = cell.column
                          .columnDef as CustomColumnDef<TData>;
                        const alignment =
                          "align" in columnDef ? columnDef.align : "left";

                        return (
                          <TableCell
                            key={cell.id}
                            className={`border-b text-${alignment} p-3`}
                            style={{ width: columnDef.size ?? "auto" }}
                          >
                            {flexRender(columnDef.cell, cell.getContext())}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ));
                })()
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      {pagination && (
        <div className="flex justify-between items-center my-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => pagination.onPageChange(0)}
              disabled={pagination.currentPage === 0}
            >
              <ChevronsLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                pagination.onPageChange(pagination.currentPage - 1)
              }
              disabled={pagination.currentPage === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <span className="text-sm">
              Page{" "}
              <strong>
                {pagination.currentPage + 1} of {pagination.totalPages}
              </strong>
            </span>

            <Button
              variant="ghost"
              onClick={() =>
                pagination.onPageChange(pagination.currentPage + 1)
              }
              disabled={pagination.currentPage + 1 >= pagination.totalPages}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => pagination.onPageChange(pagination.totalPages - 1)}
              disabled={pagination.currentPage + 1 >= pagination.totalPages}
            >
              <ChevronsRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Rows per page:</span>
            <Select
              value={String(pagination?.pageSize || 10)}
              onValueChange={(value) =>
                pagination?.onPageSizeChange(Number(value))
              }
            >
              <SelectTrigger className="w-[70px] cursor-pointer">
                <SelectValue placeholder="Rows per page" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                {[10, 20, 50, 100].map((size) => (
                  <SelectItem
                    className="cursor-pointer"
                    key={size}
                    value={String(size)}
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </>
  );
}
