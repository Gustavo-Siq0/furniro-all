import productImage from '../assets/img/fundo-home.png';
import { formatPrice } from '../utils/formatPrice';
import type { PaginatedResponse } from '../types/pagination';
import type { ApiProduct, Product, ProductQueryParams } from '../types/product';
import { apiFetch } from './http';

function mapApiProductToProduct(product: ApiProduct): Product {
  const finalPrice = product.finalPrice ?? product.price * (1 - (product.discount ?? 0) / 100);

  return {
    id: Number(product.id),
    sku: product.sku,
    name: product.name,
    category: product.category,
    description: product.description,
    image: product.image || productImage,
    gallery: product.gallery?.length ? product.gallery : [product.image || productImage],
    colors: product.colors ?? [],
    sizes: product.sizes ?? [],
    badge: product.badge ?? (product.isNew ? 'New' : product.discount ? `-${product.discount}%` : null),
    badgeColor: product.badgeColor ?? (product.isNew ? '#2EC1AC' : '#E97171'),
    complementaryDescription: product.complementaryDescription,
    additionalInfo: product.additionalInfo,
    price: formatPrice(finalPrice),
    oldPrice: product.discount ? formatPrice(product.price) : null,
    rawPrice: finalPrice,
  };
}

export async function getProducts(params: ProductQueryParams = {}): Promise<PaginatedResponse<Product>> {
  const allProducts = await apiFetch<ApiProduct[]>('/products');
  const selectedCategory = params.category?.toLowerCase();
  const search = params.search?.toLowerCase();

  const filtered = allProducts
    .filter((product) => !selectedCategory || product.category.toLowerCase() === selectedCategory)
    .filter((product) => !search || `${product.name} ${product.description}`.toLowerCase().includes(search))
    .sort((first, second) => {
      if (params.sort === 'price') return params.order === 'DESC' ? second.price - first.price : first.price - second.price;
      if (params.sort === 'name') return first.name.localeCompare(second.name);
      return first.id - second.id;
    });

  const page = params.page ?? 1;
  const limit = params.limit ?? (filtered.length || 1);
  const data = filtered.slice((page - 1) * limit, page * limit).map(mapApiProductToProduct);

  return {
    data,
    page,
    limit,
    totalItems: filtered.length,
    totalPages: Math.max(1, Math.ceil(filtered.length / limit)),
  };
}

export async function getProduct(identifier: string | number): Promise<Product> {
  const product = await apiFetch<ApiProduct>(`/products/${identifier}`);
  return mapApiProductToProduct(product);
}
