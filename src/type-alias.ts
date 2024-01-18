export type ID = string | number;

// Before refactor to type alias string | number
// export type Category = {
//     id: string;
//     name: string;
// }

// export type Product = {
//     id: string;
//     name: string;
//     price: number;
//     category: Category;
// }

// After refactor to type alias string | number
export type Category = {
    id: ID;
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;
    category: Category;
}


