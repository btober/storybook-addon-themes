export declare class Store {
    store: Map<any, any>;
    callbacks: ((key: any, value: any) => void)[];
    get(key: any): any;
    has(key: any): boolean;
    set(key: any, value: any): void;
    subscribe(callback: (key: any, value: any) => void): () => void;
    unsunscribe(callback: (key: any, value: any) => void): void;
}
