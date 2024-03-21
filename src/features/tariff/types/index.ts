export type Insure = {
  id: string
  company: string
  modality: Modality
  price: number
  final_price: number
  excess: number
  logo: string
  grade: Grade
  features: Feature[]
}

export type Feature = {
  id: string
  description: string
  icon: string
  color: string
}

export type Grade = {
  total: number
}

export type Modality = {
  id: number
  name: string
}
