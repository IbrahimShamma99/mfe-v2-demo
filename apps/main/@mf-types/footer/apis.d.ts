
    export type RemoteKeys = 'footer/footer';
    type PackageType<T> = T extends 'footer/footer' ? typeof import('footer/footer') :any;