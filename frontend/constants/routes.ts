export const ROUTES_DASHBOARD = {
  administrator: "/dashboard/list-users",
  assistant: "/dashboard/upload-signs",
  professional: "/dashboard/inbox",
};

export const USER_VALID_ROUTES = {
  administrator: [
    "/dashboard/list-users",
    "/dashboard/add-users",
    "/dashboard/profile",
  ],
  assistant: [
    "/dashboard/upload-signs",
    "/dashboard/data-analysis",
    "/dashboard/profile",
    "/dashboard/list-models",
  ],
  professional: [
    "/dashboard/inbox",
    "/dashboard/upload-signs",
    "/dashboard/data-analysis",
    "/dashboard/profile",
    "/dashboard/upload-models",
    "/dashboard/list-models",
  ],
};
