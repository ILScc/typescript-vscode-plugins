// eslint-disable-next-line @typescript-eslint/ban-ts-comme
//@ts-ignore
import type { Configuration } from '../../src/configurationType'
import { ConditionalPick } from 'type-fest'
import tslib from 'typescript/lib/tsserverlibrary'
export type Configuration = Configuration
export type GetConfig = <T extends keyof Configuration>(key: T) => Configuration[T]
export type LanguageServiceMethodWithConfig<T extends keyof ConditionalPick<tslib.LanguageService, (...args) => any>, O extends any[] = []> = (
    c: GetConfig,
    ...args: Parameters<tslib.LanguageService[T]>
) => ReturnType<tslib.LanguageService[T]>
