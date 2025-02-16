import { Product } from '../types/product';
import { PACKAGING_TYPES } from '../types/product';

export const products: Product[] = [
  {
    id: 'peanuts',
    name: 'Peanuts',
    description: 'Premium quality peanuts available in various grades and sizes',
    image: '../../../images/products/peanuts/main.png',
    variants: [
      {
        name: 'Java Peanuts',
        displayImage: '../../../images/products/peanuts/java.png',
        specifications: [
          { key: 'Counts per Ounce', value: '50/60, 60/70, 70/80, 80/90, 120/140, 140/160' },
          { key: 'Moisture', value: '8% max' },
          { key: 'Packaging', value: 'Jute bad/ PP bag' },
          { key: 'Foreign matter', value: '0.5% max' }
        ],
        packaging: `${PACKAGING_TYPES.JUTE}, ${PACKAGING_TYPES.PP} (As per Customer Requirement)`
      },
      {
        name: 'TJ Peanuts',
        displayImage: '../../../images/products/peanuts/tj.png',
        specifications: [
          { key: 'Counts per Ounce', value: '50/60, 60/70, 70/80, 80/90, 90/100' },
          { key: 'Moisture', value: '8% max' },
          { key: 'Packaging', value: 'Jute bad/ PP bag' },
          { key: 'Foreign matter', value: '0.5% max' }
        ],
        packaging: `${PACKAGING_TYPES.JUTE}, ${PACKAGING_TYPES.PP} (As per Customer Requirement)`
      },
      {
        name: 'Bold Peanuts',
        displayImage: '../../../images/products/peanuts/bold.png',
        specifications: [
          { key: 'Counts per Ounce', value: '38/42, 40/50, 50/60, 60/70' },
          { key: 'Moisture', value: '8% max' },
          { key: 'Packaging', value: 'Jute bad/ PP bag' },
          { key: 'Foreign matter', value: '0.5% max' }
        ],
        packaging: `${PACKAGING_TYPES.JUTE}, ${PACKAGING_TYPES.PP} (As per Customer Requirement)`
      }
    ]
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    description: 'High-quality sesame seeds available in various varieties',
    image: '../../../images/products/sesame/main.png',
    variants: [
      {
        name: 'Natural Sesame Seeds',
        displayImage: '../../../images/products/sesame/natural.png',
        specifications: [
          { key: 'Oil Percentage', value: '40 to 50%' },
          { key: 'Physical Purity', value: 'Up to 99.99%' },
          { key: 'Packaging', value: 'Multi-layer PP bag' },
          { key: 'Moisture', value: '5% max' }
        ],
        packaging: PACKAGING_TYPES.MULTI_PP
      },
      {
        name: 'Black Sesame Seeds',
        displayImage: '../../../images/products/sesame/black.png',
        specifications: [
          { key: 'Oil Content', value: '40 to 50%' },
          { key: 'Physical Purity', value: 'Up to 99.99%' },
          { key: 'Packaging', value: 'Multi-layer PP bag' },
          { key: 'Moisture', value: '5% max' }
        ],
        packaging: PACKAGING_TYPES.MULTI_PP
      },
      {
        name: 'Hulled Sesame Seeds',
        displayImage: '../../../images/products/sesame/hulled.png',
        specifications: [
          { key: 'Oil Content', value: '48 to 52%' },
          { key: 'Physical Purity', value: 'Up to 99.99%' },
          { key: 'Packaging', value: 'Multi-layer PP bag' },
          { key: 'Moisture', value: '5% max' }
        ],
        packaging: PACKAGING_TYPES.MULTI_PP
      }
    ]
  },
  {
    id: 'brown-chickpeas',
    name: 'Brown Chickpeas',
    description: 'Premium quality brown chickpeas from India',
    image: '../../../images/products/chickpeas/main.png',
    variants: [
      {
        name: 'Brown Chickpeas',
        displayImage: '../../../images/products/chickpeas/chickpeas.png',
        specifications: [
          { key: 'Origin', value: 'India' },
          { key: 'Impurity', value: '1% max' },
          { key: 'Packaging', value: '25 & 50 Kgs PP bag' },
          { key: 'Type', value: 'Machine cleaned' }
        ],
        packaging: '25 & 50 Kgs PP bag'
      }
    ]
  },
  {
    id: 'roasted-grams',
    name: 'Roasted Grams',
    description: 'High-quality roasted grams available in various forms',
    image: '../../../images/products/grams/grams2.png',
    variants: [
      {
        name: 'Roasted Grams',
        displayImage: '../../../images/products/grams/grams1.png',
        specifications: [
          { key: 'Quality', value: 'With skin & Without Skin' },
          { key: 'Type', value: 'Whole and Split' },
          { key: 'Packaging', value: '20,30 Kgs PP bags' }
        ],
        packaging: '20,30 KGS PP BAG (As per customer requirement)'
      }
    ]
  }
];