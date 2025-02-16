export interface ProductSpecification {
  key: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  displayImage: string;
  specifications: ProductSpecification[];
  packaging: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  variants: ProductVariant[];
}

export const PACKAGING_TYPES = {
  JUTE: 'Jute bag',
  PP: 'PP bag',
  MULTI_PP: 'Multi layer PP bag'
} as const;