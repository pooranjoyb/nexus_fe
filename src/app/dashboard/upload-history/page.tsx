"use client";

import { DataTable } from "@/components/custom/DataTable";
import { Badge } from "@/components/ui/badge";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Resume } from "@/app/types/resume";
import { useAuth } from "@/hooks/useAuth";
import { useFetchResumeQuery } from "@/app/api/resume";

interface CellProps<TData, TValue> {
  info: CellContext<TData, TValue>;
}

type CustomColumnDef<TData> = ColumnDef<TData> & {
  align?: "left" | "center" | "right";
};

export default function UploadHistory() {

  const { user } = useAuth();
  const { data, isFetching } = useFetchResumeQuery(user?.user?._id ?? "");

  const CellRenderer = <TData extends Resume, TValue>({
    info,
  }: CellProps<TData, TValue>) => {
    const cellValue: TValue = info.getValue();
    if (info.column.id === "created_at") {
      return (
        <Badge
          className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset"
          variant={"secondary"}
        >
          {String(cellValue)}
        </Badge>
      );
    } else if (info.column.id === "status") {
      const statusValue = "AVAILABLE";
      let badgeClassName =
        "items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset";
      let badgeTextClassName = "";

      if (statusValue === "AVAILABLE") {
        badgeClassName += " bg-green-50 ring-green-600/20";
        badgeTextClassName = "text-green-700";
      } else {
        badgeClassName += " bg-yellow-50 ring-yellow-600/20";
        badgeTextClassName = "text-yellow-700";
      }

      return (
        <div className="flex items-center justify-center">
          <Badge
            className={`${badgeClassName} ${badgeTextClassName} `}
            variant="secondary"
          >
            {statusValue}
          </Badge>
        </div>
      );
    } 

    return cellValue;
  };

  const columns: CustomColumnDef<Resume>[] = [
    {
      accessorKey: "resume_id",
      header: "Resume Id",
      cell: (info) => <CellRenderer info={info} />,
      size: 10,
    },
    {
      accessorKey: "file_name",
      header: "Filename",
      cell: (info) => <CellRenderer info={info} />,
      size: 100,
    },
    {
      accessorKey: "uploaded_at",
      header: "Uploaded",
      cell: (info) => {
        const rawDate = info.getValue() as string;
        const formattedDate = new Date(rawDate).toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });

        return <span>{formattedDate}</span>;
      },
      size: 100,
      align: "center",
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (info) => <CellRenderer info={info} />,
      size: 100,
      align: "center",
    },
  ];

  return (
    <div>
        <div className="text-xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 text-transparent bg-clip-text animate-gradient drop-shadow-lg mb-5">
          Resume History. See all previous responses here.
        </div>
      <DataTable
        columns={columns}
        data={data?.list ?? []}
        loading={isFetching}
        sortableColumns={["filename"]}
        search={{
          searchTitle: "Find your resumes",
          searchPlaceholder: "Type to search for your uploaded resume",
        }}
      />
    </div>
  );
}
