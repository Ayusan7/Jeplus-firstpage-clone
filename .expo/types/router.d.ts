/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/account` | `/account`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/bulk` | `/bulk`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/catalog` | `/catalog`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/ledger` | `/ledger`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/account` | `/account`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/bulk` | `/bulk`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/catalog` | `/catalog`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/ledger` | `/ledger`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/account${`?${string}` | `#${string}` | ''}` | `/account${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/bulk${`?${string}` | `#${string}` | ''}` | `/bulk${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/catalog${`?${string}` | `#${string}` | ''}` | `/catalog${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/ledger${`?${string}` | `#${string}` | ''}` | `/ledger${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString | Router.ExternalPathString | `/_sitemap` | `${'/(tabs)'}/account` | `/account` | `${'/(tabs)'}/bulk` | `/bulk` | `${'/(tabs)'}/catalog` | `/catalog` | `${'/(tabs)'}` | `/` | `${'/(tabs)'}/ledger` | `/ledger`; params?: Router.UnknownInputParams; };
    }
  }
}
