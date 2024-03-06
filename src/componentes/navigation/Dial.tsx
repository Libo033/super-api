"use client";
import { DashboardCustomize, FiberNew, Web } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const actions = [
  { icon: <FiberNew />, name: "Nueva peticion", redirect: "/new" },
  { icon: <DashboardCustomize />, name: "Seguir creando", redirect: "/" },
];

const Dial = () => {
  const r = useRouter();

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 32, right: 32 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            onClick={() => r.push(`${action.redirect}`)}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </div>
  );
};

export default Dial;
