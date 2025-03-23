"use client";

import { useState } from "react";
import { DataTable } from "@/components/custom/DataTable";
import { Badge } from "@/components/ui/badge";
import { FileSearch } from "lucide-react";
import { ColumnDef, CellContext } from "@tanstack/react-table";
import { Resume } from "@/app/types/resume";
import UploadResumeDialog from "@/components/custom/UploadResumeDialog";

interface CellProps<TData, TValue> {
  info: CellContext<TData, TValue>;
}

type CustomColumnDef<TData> = ColumnDef<TData> & {
  align?: "left" | "center" | "right";
};

const resumes = [
  {
    resume_id: "123",
    filename: "Pooranjoy_Resume.pdf",
    created_at: "2023-10-26T10:00:00Z",
    status: "processed",
  },
  {
    resume_id: "345",
    filename: "JatinSharma_CV.pdf",
    created_at: "2023-10-25T15:30:00Z",
    status: "pending",
  },
  {
    resume_id: "234",
    filename: "Debarun_Resume.pdf",
    created_at: "2023-10-24T09:45:00Z",
    status: "error",
  },
];

export default function AnalyseResume() {
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [analyseDialog, setAnalyseDialog] = useState<boolean>(false);

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
    } else if (info.column.id === "Actions") {
      return (
        <div className="flex items-center justify-center">
          <FileSearch
            className="cursor-pointer"
            onClick={() => {
              setSelectedResume(info.row.original);
              setAnalyseDialog(!analyseDialog);
            }}
          />
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
      accessorKey: "filename",
      header: "Filename",
      cell: (info) => <CellRenderer info={info} />,
      size: 100,
    },
    {
      accessorKey: "created_at",
      header: "Uploaded",
      cell: (info) => <CellRenderer info={info} />,
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
    {
      accessorKey: "Actions",
      header: "Actions",
      cell: (info) => <CellRenderer info={info} />,
      size: 200,
      align: "center",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-600 text-transparent bg-clip-text animate-gradient drop-shadow-lg mb-5">
        Analyse your resumes here. All in one place.
      </h1>
      <DataTable
        columns={columns}
        data={resumes}
        sortableColumns={["filename"]}
        search={{
          searchTitle: "Find your resumes",
          searchPlaceholder: "Type to search for your uploaded resume",
        }}
      />
      <UploadResumeDialog
        isOpen={analyseDialog}
        onClose={() => {
          setAnalyseDialog(!analyseDialog);
        }}
        resume={selectedResume}
      />
    </div>
  );
}
