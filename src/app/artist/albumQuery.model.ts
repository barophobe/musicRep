export class AlbumQuery {
  constructor(public style?: string[],
              public thumb?: string,
              public format?: string,
              public country?: string,
              public barcode?: string[],
              public uri?: string,
              public community?:  {want: string, have: string},
              public label?: string[],
              public catno?: string,
              public year?: string,
              public genre?: string[],
              public title?: string,
              public resource_url?: string,
              public type?: string,
              public id?: number) {}
}

