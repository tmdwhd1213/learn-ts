interface Config {
  url: string;
}

type Code<T> = T;

declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: Code<number>): number;
}
