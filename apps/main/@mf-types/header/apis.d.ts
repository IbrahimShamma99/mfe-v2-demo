
    export type RemoteKeys = 'header/header';
    type PackageType<T> = T extends 'header/header' ? typeof import('header/header') :any;