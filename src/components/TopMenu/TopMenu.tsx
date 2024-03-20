import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { orderStore } from "@/Store/orderSlices";
import { GrAdd, GrSystem, GrUser } from "react-icons/gr";
import styles from "./TopMenu.module.css";

// probando commit
export default function TopMenu() {
  const { setCreateForm } = orderStore();

  const userName = localStorage.getItem("currentUser");
  const onlyName = userName && JSON.parse(userName).firstName;

  const closeSession = () => {
    alert("hola");
  };

  const options = [
    {
      name: "Agregar pedido",
      icon: <GrAdd size={50} />,
      tooltip: "Agregar Pedido",
      execOnClick: () => {
        setCreateForm();
      },
    },
    {
      name: "Configuracion",
      icon: <GrSystem size={50} />,
      tooltip: "Configuración",
      execOnClick: () => {
        alert("hola");
      },
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.options}>
        {options.map((option, index) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button key={index} onClick={option.execOnClick}>
                  {option.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{option.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className={styles.user}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className={styles.userButton} onClick={closeSession}>
                <GrUser size={30} />
                {onlyName}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Cerrar Sesión</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
