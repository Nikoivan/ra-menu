import Menu from "../Menu/Menu";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import RacePage from "../RacePage/RacePage";
import DriftPage from "../DriftPage/DriftPage";
import TimeAttackPage from "../TimeAttackPage/TimeAttackPage";
import ForzaPage from "../ForzaPage/ForzaPage";

export default function HomePage() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Menu />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "/",
          element: <RacePage />,
        },
        {
          path: "drift",
          element: (
            <>
              <DriftPage />
            </>
          ),
        },
        {
          path: "timeattack",
          element: (
            <>
              <TimeAttackPage />
            </>
          ),
        },
        {
          path: "forza",
          element: (
            <>
              <ForzaPage />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
