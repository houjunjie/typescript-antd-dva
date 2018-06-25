declare module "*.css" {
  const content: {
    [propName: string]: any
  };
  export default content;
}

declare module "*.less" {
  const content: any;
  export default content;
}
