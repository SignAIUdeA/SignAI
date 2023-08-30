interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const GRAY_LIGHT = "#5F5F5F";
const WHITE = "#fff";
const DEFAULT_SIZE_ICONS = "1.3rem";

export const IconUser = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = WHITE,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill }}>
      <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
    </svg>
  );
};

export const IconUserBackground = ({
  width = "2rem",
  height = "2rem",
  fill = "linear-gradient(180deg, #43B649 0%, #069A7E 100%)",
}: IconProps) => {
  return (
    <div
      style={{
        width,
        height,
        background: fill,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}>
      <IconUser />
    </div>
  );
};

export const IconDelete = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = GRAY_LIGHT,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill }}>
      <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
      <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
    </svg>
  );
};

export const IconEdit = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = GRAY_LIGHT,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill }}>
      <path d="m16 2.012 3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287-3-3zm0 6h16v2H4z"></path>
    </svg>
  );
};

export const IconDetails = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = GRAY_LIGHT,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill }}>
      <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path>
      <path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path>
    </svg>
  );
};
