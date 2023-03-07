export type IHeaderMenu = {
  id: number;
  title: string;
  url: string;

  headerSubmenus: {
    id: number;
    title: string;
    url: string;
  }[];
};
