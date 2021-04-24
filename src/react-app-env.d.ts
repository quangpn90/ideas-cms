/// <reference types="react-scripts" />
declare module '*.module.less' {
  const resource: { [key: string]: string };
  export = resource;
}
