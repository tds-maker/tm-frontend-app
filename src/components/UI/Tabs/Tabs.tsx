import * as React from 'react';
import './tabs.css';

interface IProps {
  activeTab: number;
  onTabClicked?: (index: number) => void;
}

interface IState {
  activeTab: number;
}

class Tabs extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeTab: props.activeTab
    };
  }

  public componentWillReceiveProps(newProps: IProps) {
    if (newProps.activeTab !== this.state.activeTab) {
      this.setState({
        activeTab: newProps.activeTab
      });
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        <div className="main-tabs">
          <ul>
            {React.Children.map(
              this.props.children,
              (element: JSX.Element, i) => {
                return (
                  <li
                    key={i}
                    onClick={this.onTabClicked.bind(this, i)}
                    className={i === this.state.activeTab ? 'active' : ''}
                  >
                    {element.props.header}
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <div className="tabs">
          {React.Children.toArray(this.props.children).find((child, i) => {
            return i === this.state.activeTab;
          })}
        </div>
      </div>
    );
  }

  private onTabClicked(index: number, e: any) {
    if(index >= this.state.activeTab){
      return;
    }
    const { onTabClicked = (i: number) => null } = this.props;
    onTabClicked(index);
  }
}


export default Tabs;
