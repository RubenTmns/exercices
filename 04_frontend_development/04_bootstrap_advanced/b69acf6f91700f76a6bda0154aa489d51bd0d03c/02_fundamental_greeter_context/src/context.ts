type ParamRest = string[];
type CallbackType = (...restParam: ParamRest) => void;

export function contextFunction(callbackFunction: CallbackType, parameters: ParamRest): void {
  console.log(`We now greet: `);
  callbackFunction(...parameters);
}
