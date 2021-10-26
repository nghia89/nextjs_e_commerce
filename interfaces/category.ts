export interface ITreeCateItem {
    item: ITreeCateItem
    children: Array<ITreeCateItem>
}

export interface ICategoryVM {
    id?: number
    name?: string
    description?: string
    sortOrder?: number
    parentId?: number
    images?: string
    status?: number
    seoAlias?: string
    seoKeywords?: string
    seoDescription?: string
    code?: string
}
