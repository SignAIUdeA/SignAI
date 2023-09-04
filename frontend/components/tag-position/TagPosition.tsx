interface Props {
  position?: "PRO" | "ADMIN" | "AUX";
}

const POSITIONS = {
  PRO: {
    label: "Profesional LSC",
    color: "var(--blue-dark)",
  },
  ADMIN: {
    label: "Administrador",
    color: "var(--green-dark)",
  },
  AUX: {
    label: "Auxiliar LSC",
    color: "var(--blue-mid)",
  },
};

function TagPosition({ position = "AUX" }: Props) {
  const { label, color } = POSITIONS[position];
  const style = {
    color: color,
    border: `1px solid ${color}`,
    borderRadius: "9px",
    backgroundColor: "#ffffffd6",
    padding: "2px 10px",
    fontSize: "0.725rem",
    weigth: "var(--font-mid)",
  };
  return <span style={style}>{label}</span>;
}

export default TagPosition;
