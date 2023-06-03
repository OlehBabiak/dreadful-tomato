export interface ResponseData {
    total: number
    entries: Entry[]
}

export interface Entry {
    title: string
    description: string
    programType: string
    images: Images
    releaseYear: number
}

export interface Images {
    posterArt: PosterArt
}

export interface PosterArt {
    url: string
    width: number
    height: number
}
