export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
	School,
	Students,
}

export interface TopPageAdvantage {
	title: string;
	description: string;
	_id: string;
}

export interface HhData {
	count: number;
	juniorSalary: number;
	middleSalary: number;
	seniorSalary: number;
	updatedAt: Date;
	_id: string;
}

export interface TopPageBlog {
	h1: string;
	metaTitle: string;
	metaDescription: string;
	views: number;
	_id: string;
}

export interface TopPage {
	_id: string;
	tags: string[];
	secondCategory: string;
	alias: string;
	title: string;
	category: string;
	seoText: string;
	tagsTitle: string;
	metaTitle: string;
	metaDescription: string;
	firstCategory: TopLevelCategory;
	advantages: TopPageAdvantage[];
	createdAt: Date;
	updatedAt: Date;
	hh: HhData;
	categoryOn: string;
	blog: TopPageBlog;
}
