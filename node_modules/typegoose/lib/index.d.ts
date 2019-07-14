export interface IndexOptions {
    expires?: string;
    unique?: boolean;
    sparse?: boolean;
    background?: boolean;
    dropDups?: boolean;
    min?: number;
    max?: number;
    v?: number;
    expireAfterSeconds?: number;
    name?: string;
    partialFilterExpression?: any;
    collation?: object;
    default_language?: string;
    lowercase?: boolean;
    uppercase?: boolean;
    trim?: boolean;
}
export declare const index: (fields: any, options?: IndexOptions) => (constructor: any) => void;
