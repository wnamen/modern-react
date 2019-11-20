/* define & export global types here */

export interface IRouteProps {
  component?: any;
  exact?: boolean;
  name?: string;
  path?: string;
  routes?: IRouteProps[];
  strict?: boolean;
}
