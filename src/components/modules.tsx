import React from "react";
import modules from "@/components/body/module"

const Modules: React.FC = () => {
  return (
    <div>
      <h2>Module List</h2>
      <ul>
        {modules.map((mod: Modules, index: number) => (
          <li key={index}>
            <strong>{mod.title}</strong> - Teacher: {mod.teacher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Modules;