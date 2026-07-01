import { Outlet } from "react-router";
import Header from "./Header/Header";
export default function Dashboard() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  );
}
