### rick_morty_react_native_typescript

## Install the latest version of Expo CLI and Typescript
```
yarn global add expo-cli
yarn global add typescript
```

## Create app
```
expo init rick_morty_react_native_typescript
cd rick_morty_react_native_typescript
```

## Initialize TypeScript and update tsconfig.json
```
tsc --init
```

tsconfig.json:
```
{
    "compilerOptions": {
        "target": "es2017",
        "module": "es2015",
        "lib": [
            "es2017"
        ],
        "jsx": "react-native",
        "sourceMap": true,
        "noEmit": true,
        "importHelpers": true,
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
    },
    "exclude": [
        "node_modules",
        "babel.config.js",
        "metro.config.js",
        "jest.config.js"
    ]
}
```

## Install react-native-typescript-transformer and configure app.json
```
yarn add -D typescript
yarn add -D react-native-typescript-transformer
yarn add tslib (optional)
```

app.json:
```
{
    "expo": {
        "packagerOpts": {
          "sourceExts": ["ts", "tsx"],
          "transformer": "node_modules/react-native-typescript-transformer/index.js"
        }
    }
}
```

## Add Typescript types
```
yarn add -D @types/jest @types/react @types/react-native @types/react-test-renderer @types/expo @types/expo__vector-icons
# or for npm
npm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer @types/expo @types/expo__vector-icons
```

## Rename App.js to App.tsx

## Start Expo
```
yarn start
```

## Create a jest.config.js file to configure Jest to use TypeScript
```
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
```

## Type-check your TypeScript files
```
yarn tsc
```

## Compile the code
The result will be a file.js which contains the same JavaScript that you fed in
```
tsc file.ts
```

## Test project
```
yarn test
```

## Install redux, react-redux and redux-saga

```
yarn add redux react-redux redux-devtools @types/react-redux redux-saga
OR
yarn add redux react-redux redux-devtools redux-thunk
```

## Install axios

```
yarn add axios
```

## Install react-native-gesture-handler

```
yarn add react-native-gesture-handler --save
```

## Install react-native-safe-area-context and react-native-screens

```
yarn add react-native-safe-area-context react-native-screens --save
```

## Install react-navigation, react-navigation-stack and @react-native-community/masked-view

```
yarn add react-navigation react-navigation-stack @react-native-community/masked-view --save
```
