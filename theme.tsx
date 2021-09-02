import * as React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
export const ThemeContext = React.createContext('');

export function themeable<T extends React.ComponentType>(ComposedComponent: T) {
  const result = hoistNonReactStatic(
    class extends React.Component {
      render() {
        return (
          <ThemeContext.Provider value={'antd'}>
            <div>line 1</div>
            <ComposedComponent>1111</ComposedComponent>
          </ThemeContext.Provider>
        );
      }
    },
    ComposedComponent
  );
  return result;
}
