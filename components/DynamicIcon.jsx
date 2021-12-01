import React from "react";
import * as Icon from "@mui/icons-material";

export default function DynamicIcon({ iconName }) {
  const DynamicIcon = Icon[iconName];
  return (
    <DynamicIcon className="mr-5 text-gray-500 text-2xl group-hover:text-blue-300" />
  );
}
