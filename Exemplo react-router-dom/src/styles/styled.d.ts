import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;

    background: string;
    title: string;
    text: string;

    input: {
      hoverColor: string;
    };
  }
}
