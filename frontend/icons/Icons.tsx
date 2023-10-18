interface IconProps {
  width?: string;
  height?: string;
  fill?: string;
  rotate?: string;
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

export const IconAvatarUser = ({
  width = "2rem",
  height = "2rem",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="16.002"
        cy="16.001"
        r="16"
        fill="url(#paint0_linear_127_28)"
      />
      <path
        d="M12.002 10.001C12.002 12.2063 13.7966 14.001 16.002 14.001C18.2073 14.001 20.002 12.2063 20.002 10.001C20.002 7.79564 18.2073 6.00098 16.002 6.00098C13.7966 6.00098 12.002 7.79564 12.002 10.001ZM23.1131 22.8899H24.002V22.001C24.002 18.5708 21.21 15.7788 17.7797 15.7788H14.2242C10.7931 15.7788 8.00195 18.5708 8.00195 22.001V22.8899H23.1131Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_127_28"
          x1="16.002"
          y1="0.000976562"
          x2="16.002"
          y2="32.001"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#43B649" />
          <stop offset="1" stopColor="#069A7E" />
        </linearGradient>
      </defs>
    </svg>
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

export const IconLogout = ({
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
      <path d="m2 12 5 4v-3h9v-2H7V8z" />
      <path d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z" />
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

export const IconArrow = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = GRAY_LIGHT,
  rotate = "180deg",
}: IconProps) => {
  return (
    <div
      style={{
        transform: `rotate(${rotate})`,
      }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.75 1.5L1.25 9L8.75 16.5"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const IconFilter = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = GRAY_LIGHT,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fill}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
      />
    </svg>
  );
};

export const IconError = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = "rgb(252, 68, 68)",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      width={width}
      height={height}
      stroke={fill}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );
};

export const IconClose = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = "rgb(252, 68, 68)",
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke={fill}
      width={width}
      height={height}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const IconCheckSuccesfully = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = "rgb(252, 68, 68)",
}: IconProps) => {
  return (
    <svg
      fill={fill}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 342.51 342.51"
      xmlSpace="preserve"
      stroke={fill}
      strokeWidth="0.0034250799999999996"
      transform="matrix(1, 0, 0, 1, 0, 0)">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z" />
        </g>
      </g>
    </svg>
  );
};

export const IconMenuHamburger = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = WHITE,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24">
      <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
    </svg>
  );
};

export const IconLock = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = WHITE,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z"
        fill={fill}
      />
    </svg>
  );
};

export const IconCloseTag = ({
  width = DEFAULT_SIZE_ICONS,
  height = DEFAULT_SIZE_ICONS,
  fill = WHITE,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fill}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
