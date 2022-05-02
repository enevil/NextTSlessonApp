import { DetailedHTMLProps, HTMLAttributes } from "react";
import { TopLevelCategory, TopPage } from "../../interfaces/page.interface";
import { Product } from "../../interfaces/product.interface";

export interface TopPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    firstCategory: TopLevelCategory;
    page: TopPage;
    products: Product[];
}