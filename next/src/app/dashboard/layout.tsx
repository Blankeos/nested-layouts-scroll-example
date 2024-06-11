import Link from "next/link";
import { PropsWithChildren } from "react";

export default function DashboardLayout(props: PropsWithChildren) {
  return (
    <div className="flex flex-grow h-full ">
      <div className="flex w-32 flex-col p-2 gap-y-4  bg-orange-500 justify-center">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <div className="h-full">{props.children}</div>
    </div>
  );
}
