declare module '@jaames/iro' {
    interface IColorPickerOptions {
      width?: number;
      height?: number;
      color?: string;
      padding?: number;
      sliderMargin?: number;
      sliderHeight?: number;
      wheelLightness?: boolean;
      markerRadius?: number;
      borderWidth?: number;
      borderColor?: string;
      display?: string;
      anticlockwise?: boolean;
      css?: object;
    }

    export class Color {
      hexString: string;
    }

    export class ColorPicker {
      constructor(el?: string, options?: IColorPickerOptions);
      on(eventType: string, callback: (color: Color) => void): void;
      color: Color;
    }
  }