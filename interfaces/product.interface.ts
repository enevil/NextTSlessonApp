export interface ProductCharacteristic {
	name: string;
	value: string;
}

export interface ProductBlog {
	text: string;
	_id: string;
	bigImage: string;
}

export interface ProductReview {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface Product {
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	image: string;
	description: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	characteristics: ProductCharacteristic[];
	advantages: string;
	initialRating: number;
	createdAt: Date;
	updatedAt: Date;
	html: string;
	blog: ProductBlog;
	reviews: ProductReview[];
	reviewCount: number;
	reviewAvg?: number;
}
