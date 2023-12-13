export interface CardSignType {
  id: string;
  path_file: string;
  label: string;
  creation_date: string;
  role_user: string;
  upload_by: string;
  approve: boolean;
}

export const formatDate = (dateString: string): string => {
  const formattedDate = new Date(dateString);

  const day = formattedDate.getDate().toString().padStart(2, "0");
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
  const year = formattedDate.getFullYear();

  return `${day}/${month}/${year}`;
};
