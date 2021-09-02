import { GET, POST, PUT, DELETE } from "./callApi";

const baseApiProduct = 'products/';

const baseApiUpload = 'uploadFiles/';
const baseApiSystemConfig = 'systemConfig/';
const baseApiColor = 'color/';
const baseApiSize = 'size/';
const baseApiSlideShow = 'slideShow/'
const baseApiProductCollection = 'productCollections/'
const baseApiPageOther = 'pageOther/'
const baseApiCatalogOther = 'catalogOther/'
const baseApiProductCategory = 'productCategory/';


export const apiUploadFile = {
    UploadImage: async (body: any) => { return await POST(`${baseApiUpload}upload_image`, body) },
    delete: async (body: any) => { return await POST(`${baseApiUpload}delete`, body) },
    UploadProductImage: async (id?: number, body?: any) => { return await POST(`${baseApiUpload}product/${id}/images`, body) }
}


export const apiColor = {
    getAll: async () => { return await GET(`${baseApiColor}getall`) },
    getById: async (id: number) => { return await GET(`${baseApiColor}` + id) },
    create: async (body: any) => { return await POST(`${baseApiColor}add`, body) },
    update: async (body: any) => { return await PUT(`${baseApiColor}update`, body) },
}

export const apiSize = {
    getAll: async () => { return await GET(`${baseApiSize}getall`) },
    getById: async (id: number) => { return await GET(`${baseApiSize}` + id) },
    create: async (body: any) => { return await POST(`${baseApiSize}add`, body) },
    update: async (body: any) => { return await PUT(`${baseApiSize}update`, body) },
}


export const apiProduct = {
    getPaging: async (param: string) => { return await GET(`${baseApiProduct}paging` + param) }
}


export const apiSystemConfig = {
    detail: async () => { return await GET(`${baseApiSystemConfig}get_by_first_system`) }
}


export const apiSlideShow = {
    getAll: async () => { return await GET(`${baseApiSlideShow}getall`) }
}

export const apiProductCollection = {
    getById: async (id?: number) => { return await GET(`${baseApiProductCollection}` + id) },
}

export const apiPageOther = {
    getById: async (id?: number) => { return await GET(`${baseApiPageOther}` + id) }
}

export const apiCatalogOther = {
    getAll: async () => { return await GET(`${baseApiCatalogOther}getall`) },
}

export const apiProductCategory = {
    getCategory: async () => { return await GET(`${baseApiProductCategory}treeview`) }
}

