const camelcase = require("camelcase");
import IAction from "./IAction";

export default abstract class BaseReducer<T> {
  private getActionTypeName(actionType: string) {
    return actionType.includes("/")
      ? camelcase(actionType.split("/")[1].toLowerCase())
      : camelcase(actionType.toLowerCase());
  }

  public call(state: T, action: IAction) {
    const actionType = this.getActionTypeName(action.type);
    if (this[actionType]) {
      return this[actionType](state, action.payload);
    } else {
      return state;
    }
  }
}
