# RNArchitecture

This is the boiler plate of crownstack react-native project. We strictly recommend to follow this architecture no matter whatever the kind of project it is. Idea behind is to follow the same pattern and standard across the company.

# Highlight of the architecture

- We use typescript within our project. We recommend have a basic look on the typescript before you proceed further. (https://www.typescriptlang.org/docs/handbook/release-notes/overview.html). We will try conclude that what you need to learn about the typescript later.
- We use 100% functional component with the help of hooks. We find it neat and clean. We recommend you to do so.
- We are following styled component. (https://styled-components.com/docs/basics#react-native)
- We have created predefined atoms and molecules within this boiler. Basically a wrapper of react native UI component like View will refer to Box. Will write better explanation for this.
- We use react-native config for handling multiple environment like dev, qa, staging and production. (https://github.com/luggit/react-native-config)
- We do not encourage to directly use string within our project instead use Localization. We are i18n-js for that. (https://www.npmjs.com/package/react-native-i18n)
- For state management we use context api and it has been setted up in the project. Do not use redux we not want to merge redux and context.
- We use Icomoons for using svg icons within the project and there is already created atom for that named Icon.(https://www.npmjs.com/package/react-icomoon)

## Pending items

- Fonts implementation to be continued
- Facing some problem on localization
- Atoms molecules setup
- Rest packages
- Push notification setup
- Code Push
- Multiple package name handling
- Documentation is pending
