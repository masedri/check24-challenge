import type { Component } from 'vue'

export enum FiltersEnum {
  Select = 'select',
  Checkbox = 'checkbox',
  Range = 'range',
  Radio = 'radio'
}

export type Select = {
  id: string
  type: FiltersEnum.Select
  options: { id: number; value: string }[]
  text: string
  value: string[]
}

export type Checkbox = {
  id: string
  type: FiltersEnum.Checkbox
  value: boolean
  text: string
}

export type Range = {
  id: string
  type: FiltersEnum.Range
  value: number
  text: string
  min: string
  max: string
  step: string
}

export type Radio = {
  id: string
  type: FiltersEnum.Radio
  value: number
  text: string
}

export type Filters = Select | Checkbox | Range | Radio
export type Components<T extends string> = Required<Record<T, Component>>
