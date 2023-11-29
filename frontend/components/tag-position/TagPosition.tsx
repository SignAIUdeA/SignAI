import { RoleType } from "@/types/types";

interface Props {
  position?: RoleType;
}

const POSITIONS = {
  professional: {
    label: "Profesional LSC",
    color: "var(--blue-dark)",
  },
  administrator: {
    label: "Administrador",
    color: "var(--green-dark)",
  },
  assistant: {
    label: "Auxiliar LSC",
    color: "var(--blue-mid)",
  },
};

function TagPosition({ position = "assistant" }: Props) {
  const { label, color } = POSITIONS[position];
  const style = {
    color: color,
    border: `1px solid ${color}`,
    borderRadius: "9px",
    backgroundColor: "#ffffffd6",
    padding: "2px 10px",
    fontSize: "0.725rem",
    weigth: "var(--font-mid)",
    width: "fit-content",
  };
  return <span style={style}>{label}</span>;
}

export default TagPosition;
