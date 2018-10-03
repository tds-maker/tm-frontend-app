import * as React from 'react';

interface IProps {
  header?: string;
  className?: string;
}

class Tab extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    return (
      <div className={`tabs_content ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Tab;
