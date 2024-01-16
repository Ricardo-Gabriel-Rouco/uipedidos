import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GrAdd, GrSystem } from "react-icons/gr";
import styles from "./TopMenu.module.css";

const options = [
  {
    name: "Agregar pedido",
    icon: <GrAdd size={50} />,
    tooltip: "Agregar Pedido",
  },
  {
    name: "Configuracion",
    icon: <GrSystem size={50} />,
    tooltip: "Configuración",
  },
];

export default function TopMenu() {
  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button key={index} >{option.icon}</Button>
            </TooltipTrigger>
            <TooltipContent><p>{option.tooltip}</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
